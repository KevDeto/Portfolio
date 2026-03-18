import imgportf from '../assets/img.png';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center md:min-h-[80vh] mb-[60px] md:my-[60px] md:mb-0 md:gap-12 px-4  sm:px-6 lg:px-8'>
            <div className='w-full md:flex-1 text-center md:text-left'>
                <div className='space-y-5 sm:space-y-6'>
                    <h1 className='flex flex-col lg:-space-y-2 text-gta-gradient text-4xl mb-5'>
                        <span className='font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[36px] block'>Hola! soy</span>
                        <strong className='text-[30px] block leading-[1.4] sm:text-[50px] md:text-[60px] lg:text-[70px]'>Kevin Huayta</strong>
                    </h1>

                    <div className=''>
                        <TypeAnimation
                            sequence={[
                                'Desarrollador Backend',
                                1500,
                                'Desarrollador Frontend',
                                1500,
                            ]}
                            speed={{ type: 'keyStrokeDelayInMs', value: 150 }}
                            repeat={Infinity}
                            className='text-[16px] sm:text-[18px] md:text-[21px] uppercase'
                        />
                    </div>

                    <p className='text-[13px] sm:text-[14px] leading-relaxed max-w-xl mx-auto md:mx-0 px-2 sm:px-4 md:px-0'>
                        Me gusta transformar ideas en código limpio y funcional, diseñando arquitecturas limpias
                        para proyectos seguros y escalables. Combino la base teórica/práctica de mi formación universitaria
                        con la investigación constante mediante documentación, videos de YouTube, y el uso de
                        la IA como un compañero más de estudio.
                    </p>
                </div>

               <div className='flex flex-col sm:flex-row gap-3 mt-6 sm:mt-8 justify-center md:justify-start'>
                    <button className='px-4 sm:px-6 py-2 cursor-pointer bg-gta-gradient text-white rounded-lg sm:rounded-l-lg sm:rounded-r-none transform transition-transform duration-500 ease hover:scale-105 will-change-transform text-sm sm:text-base'>
                        Descargar CV
                    </button>
                    <button className='px-4 sm:px-6 py-2 cursor-pointer bg-gta-gradient text-white rounded-lg sm:rounded-r-lg sm:rounded-l-none transform transition-transform duration-300 ease hover:scale-105 will-change-transform text-sm sm:text-base'>
                        Contacto
                    </button>
                </div>
            </div>

            <div className='w-full md:flex-1 flex justify-center md:justify-end items-center mb-8 md:mb-0'>
                <div className='relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
                    <img
                        src={imgportf}
                        alt="Kevin Huayta"
                        className='w-full h-full object-contain'
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;