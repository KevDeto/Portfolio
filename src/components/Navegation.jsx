import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navegation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isScrollingRef = useRef(false);
    const timeoutRef = useRef(null);
    const menuRef = useRef(null);

    const navItems = [
        { href: '#home', section: 'Home', id: 'home' },
        { href: '#technologies', section: 'Tecnologías', id: 'technologies' },
        { href: '#projects', section: 'Proyectos', id: 'projects' },
        { href: '#contact', section: 'Contacto', id: 'contact' },
    ];

    // Cerrar menú al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Bloquear scroll del body cuando el menú está abierto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const observers = [];

        navItems.forEach((item) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (isScrollingRef.current) return;

                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                            setActiveSection(item.id);
                        }
                    });
                },
                {
                    threshold: [0.3, 0.5, 0.7],
                    rootMargin: '-30% 0px -30% 0px'
                }
            );

            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleClick = (e, href, id) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            isScrollingRef.current = true;
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            setActiveSection(id);
            setIsMenuOpen(false); // Cerrar menú al hacer click

            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            timeoutRef.current = setTimeout(() => {
                isScrollingRef.current = false;
            }, 1000);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50" ref={menuRef}>
            {/* Versión Desktop */}
            <div className="hidden md:block">
                <ul className="flex justify-end gap-1 py-3 backdrop-blur-xl px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-90 transition-all duration-300">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                onClick={(e) => handleClick(e, item.href, item.id)}
                                className={`
                                    relative px-2 mx-2
                                    text-[18px] tracking-wide
                                    font-medium leading-8
                                    inline-block cursor-pointer
                                    ${activeSection === item.id
                                        ? 'text-[#F26B76] border-b-2 border-[#F26B76]'
                                        : 'text-white border-b-2 border-b-transparent transition-all duration-400 ease-in-out hover:text-[#F26B76] hover:border-b-[#F26B76]'
                                    }
                                `}
                            >
                                {item.section}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Versión Móvil - Botón Hamburguesa */}
            <div className="md:hidden">
                {/* Botón hamburguesa */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-[#2a2734]/80 backdrop-blur-xl border border-white/10 hover:bg-[#3a3744] transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </button>

                {/* Menú desplegable */}
                <div
                    className={`
                        fixed inset-0 bg-[#1C1829]/95 backdrop-blur-xl z-40
                        flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${isMenuOpen 
                            ? 'opacity-100 visible' 
                            : 'opacity-0 invisible pointer-events-none'
                        }
                    `}
                >
                    <ul className="flex flex-col items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleClick(e, item.href, item.id)}
                                    className={`
                                        text-[24px] font-medium tracking-wide
                                        transition-colors duration-300
                                        ${activeSection === item.id
                                            ? 'text-[#F26B76]'
                                            : 'text-white hover:text-[#F26B76]'
                                        }
                                    `}
                                >
                                    {item.section}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navegation;