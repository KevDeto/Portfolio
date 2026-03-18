import Item from "./Item";

const Technologies = ({ technologies }) => {
    const technologiesByCategory = {
        frontend: technologies.filter(t => t.categoria === 'frontend'),
        backend: technologies.filter(t => t.categoria === 'backend'),
        herramientas: technologies.filter(t => t.categoria === 'herramientas')
    };

    const categories = [
        { name: 'Frontend', data: technologiesByCategory.frontend },
        { name: 'Backend', data: technologiesByCategory.backend },
        { name: 'Herramientas', data: technologiesByCategory.herramientas }
    ];

    return (
        <div className="">
            <div className="w-full max-w-[800px] mx-auto space-y-5 md:p-4 py-10 ">
                {categories.map(category => (
                    <div key={category.name} className="rounded-xl p-5 space-y-5 bg-[#201d2b]/40">
                        <h3 className="text-[16px] font-semibold">{category.name}</h3>
                        <div className="flex gap-2 flex-wrap">
                            {category.data.map(technology => (
                                <Item key={technology.id} technology={technology} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;