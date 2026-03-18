import { Eye, Github } from "lucide-react"
import { useState } from "react";

const Card = ({ project, technologies }) => {
    const [showTooltip, setShowTooltip] = useState(false);


    return (
        <div className="card flex flex-col gap-2 w-full max-w-sm h-100 md:h-105 rounded-[25px] bg-[#201d2b]/40">
            <img src={project.imagen} alt="" className="card-img h-40 sm:h-50 md:h-50 w-full rounded-[25px] rounded-b-none" />
            <div className="card-body">
                <div className="flex items-center justify-between">
                    <h5 className="card-title text-[18px] p-3">{project.titulo}</h5>
                    <div className="relative mx-3">
                        <span
                            className="inline-flex items-center justify-center w-6 h-6 bg-gray-600/50 text-white rounded-full cursor-help hover:bg-gray-500 transition-colors text-sm font-bold"
                            onMouseEnter={() => setShowTooltip(true)}
                            onMouseLeave={() => setShowTooltip(false)}
                        >
                            i
                        </span>

                        {showTooltip && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#2a2734] rounded-lg shadow-xl z-4">
                                <div className="grid grid-cols-5 gap-3 gap-x-8 items-center justify-items-center px-1">
                                    {technologies.map((tech, index) => (
                                        <div key={index} className="flex items-center">
                                            {tech.icon}
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                                    <div className="border-4 border-transparent border-t-[#2a2734]"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <p className="card-text text-[14px] p-3 pt-0">
                    {project.descripcion}
                </p>
            </div>
            <div className="card-footer flex justify-evenly">
                <a href={project.linkDemo} target="_blank" className="flex items-center gap-2 px-4 py-1 md:px-6 md:py-2 cursor-pointer bg-gta-gradient text-white rounded-full transform transition-transform duration-500 ease hover:scale-105 will-change-transform">
                    < Eye />
                    Demo
                </a>
                <a href={project.linkRepo} target="_blank" className="flex items-center gap-2 px-4 py-1 md:px-6 md:py-2 cursor-pointer bg-gta-gradient text-white rounded-full transform transition-transform duration-500 ease hover:scale-105 will-change-transform">
                    < Github />
                    Repo
                </a>
            </div>
        </div>
    );
}

export default Card;