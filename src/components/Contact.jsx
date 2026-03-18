const Contact = () => {
    return (
        <div className="flex justify-center py-10 md:p-10">
            <form action="https://formspree.io/f/mwplygob" target="_blank" method="POST" className="h-auto w-200 rounded-[25px] bg-[#201d2b]/40 flex flex-col gap-5 p-10">
                <div className="">
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        minLength="2"
                        maxLength="50"
                        className="text-white w-full h-[45px] flex items-center p-3 rounded-[12px] border border-white/20 hover:border-[#F26B76] outline-none"
                        placeholder="Nombre"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="text-white w-full h-[45px] flex items-center p-3 rounded-[12px] border border-white/20 hover:border-[#F26B76] outline-none"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        required
                        minLength="2"
                        maxLength="50"
                        className="text-white w-full h-[45px] flex items-center p-3 rounded-[12px] border border-white/20 hover:border-[#F26B76] outline-none"
                        placeholder="Asunto"
                    />
                </div>

                <div>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        required
                        minLength="10"
                        maxLength="500"
                        placeholder="Mensaje"
                        className="resize-none p-3 w-full rounded-[12px] border border-white/20 hover:border-[#F26B76] outline-none"
                    ></textarea>
                </div>

                <button type="submit" className="outline-none w-38 mx-auto gap-2 px-6 py-2 cursor-pointer bg-gta-gradient text-white rounded-full transform transition-transform duration-500 ease hover:scale-105 will-change-transform">
                    Enviar
                </button>
            </form>
        </div>
    );
}

export default Contact;