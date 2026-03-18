import Card from "./Card";
import { icons } from "../assets/icons/Icons";

const Projects = ({ projects }) => {

    const getProjectIcons = (tecnologias) => {
        return tecnologias.map(tech => {
            return {
                name: tech,
                icon: icons[tech] || null
            };
        }).filter(item => item.icon !== null);
    };

    return (
        <div className="flex justify-center py-10 md:p-10">
            <div className="flex flex-wrap justify-center gap-10 m-auto p-5">
                {projects.map(project => (
                    <Card key={project.id} project={project} technologies={getProjectIcons(project.tecnologias)} />
                ))}
            </div>
        </div>
    );
}

export default Projects;