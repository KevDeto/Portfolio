const Item = ({ technology }) => {

    return (
        <div className="cursor-default flex align-middle gap-2 rounded-3xl py-2 px-3 
            bg-linear-to-br from-[#1C1829] via-[#1B1828] via-[#191724] 
            via-[#161520] via-[#14131C] via-[#121218] to-[#111117] ">
            <span>{technology.icono}</span>
            <h5 className="text-[13px] md:text-[16px]">{technology.nombre}</h5>
        </div>
    );
}

export default Item;