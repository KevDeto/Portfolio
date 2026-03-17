import { projects } from "../mocks/ProjectsMock";
import { technologies } from "../mocks/TechnologiesMock";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Technologies from "./Technologies";
import { motion } from "motion/react";

const Main = () => {
    return (
        <main className="flex flex-col gap-12 sm:gap-40 md:gap-16 mb-10 sm:mb-12 md:mb-[60px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="block md:hidden">
                <section id="home">
                    <Home />
                </section>
            </div>

            <div className="hidden md:block">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}>
                    <section id="home">
                        <Home />
                    </section>
                </motion.div>
            </div>

            <div>
                <div className="block md:hidden">
                    <div className="flex items-center -mt-10 sm:-mt-16 md:-mt-20">
                        <section id="technologies" className="w-full">
                            <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto my-8 sm:my-10 md:my-12">
                                Tecnologias
                            </h2>
                            <Technologies technologies={technologies} />
                        </section>
                    </div>
                </div>

                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex items-center -mt-20">
                        <section id="technologies" className="w-full">
                            <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto my-8 sm:my-10 md:my-12">
                                Tecnologias
                            </h2>
                            <Technologies technologies={technologies} />
                        </section>
                    </motion.div>
                </div>

                <div className="block md:hidden">
                    <div className="flex items-center mt-12 sm:mt-20 md:mt-30">
                        <section id="projects" className="w-full">
                            <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto my-8 sm:my-10 md:my-12">
                                Proyectos
                            </h2>
                            <Projects projects={projects} />
                        </section>
                    </div>
                </div>

                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex items-center mt-30">
                        <section id="projects" className="w-full">
                            <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto my-8 sm:my-10 md:my-12">
                                Proyectos
                            </h2>
                            <Projects projects={projects} />
                        </section>
                    </motion.div>
                </div>

                <div className="block md:hidden">
                    <div className="flex items-center mt-12 sm:mt-20 md:mt-30">
                        <section id="contact" className="w-full">
                            <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto mb-8 sm:mb-10 md:mb-12">
                                Contacto
                            </h2>
                            <Contact />
                        </section>
                    </div>
                </div>

                <div className="hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex items-center mt-30">
                        <section id="contact" className="w-full">
                            <h2 className="flex justify-center text-[22px] xs:text-[24px] sm:text-[28px] md:text-[30px] font-bold uppercase text-gta-gradient mx-auto mb-8 sm:mb-10 md:mb-12">
                                Contacto
                            </h2>
                            <Contact />
                        </section>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}

export default Main;