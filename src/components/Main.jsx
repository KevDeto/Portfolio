import { projects } from "../mocks/ProjectsMock";
import { technologies } from "../mocks/TechnologiesMock";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Technologies from "./Technologies";
import { motion } from "motion/react";

const Main = () => {
    return (
        <main className="flex flex-col sm:gap-0 md:gap-0 mb-10 sm:mb-12 md:mb-[60px] sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* HOME */}
            <section id="home">
                <div className="block md:hidden">
                    <Home />
                </div>
                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mb-15">
                        <Home />
                    </motion.div>
                </div>
            </section>

            {/* TECHNOLOGIES */}
            <section id="technologies" className="w-full border-t border-white/10">
                <div className="block md:hidden mb-7 mt-15">
                    <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto sm:my-10 md:my-12">
                        Tecnologias
                    </h2>
                    <Technologies technologies={technologies} />
                </div>
                
                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-15 mb-15">
                        <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto sm:my-10 md:my-12">
                            Tecnologias
                        </h2>
                        <Technologies technologies={technologies} />
                    </motion.div>
                </div>
            </section>

            {/* PROJECTS */}
            <section id="projects" className="w-full border-t border-white/10">
                <div className="block md:hidden my-15 mb-0">
                    <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto sm:my-10 md:my-12">
                        Proyectos
                    </h2>
                    <Projects projects={projects} />
                </div>
                
                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mt-15 mb-8">
                        <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto sm:my-10 md:my-12">
                            Proyectos
                        </h2>
                        <Projects projects={projects} />
                    </motion.div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="w-full border-t border-white/10">
                <div className="block md:hidden">
                    <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto mb-8 my-15 sm:mb-10 md:mb-12">
                        Contacto
                    </h2>
                    <Contact />
                </div>
                
                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="mt-15">
                        <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto mb-8 sm:mb-10 md:mb-12">
                            Contacto
                        </h2>
                        <Contact />
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default Main;