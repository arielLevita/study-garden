import AnimatedPage from '../components/AnimatedPage'

const AboutPage = () => {
    return (
        <section className="h-full bg-celeste">
            <AnimatedPage>
                <div className="w-full h-full">
                    <div className="max-w-md h-full mx-auto p-4 pb-8">
                        <div className="flex flex-col justify-between w-full h-full rounded-2xl shadow-lg bg-white p-4">
                            <div className='overflow-y-scroll'>
                                <h3 className="text-azul text-center text-xl font-semibold mb-4">Study Graden</h3>
                                <p className='mb-2'>Esta aplicación fue diseñada en el marco del curso &#34;Diseño UX UI&#34; de Codo a Codo (CABA), a cargo de la Prof. Natalia Miglino, durante el primer cuatrimestre de 2024.</p>
                                <p className='mb-2'>La misma tiene como propósito poder ayudar a las personas a desconectarse intencionalmente de aquellas distracciones provenientes del teléfono celular, facilitando poner la atención en actividades que requieren mayor concentración.</p>
                                <p className='mb-2'>La presentación del proyecto se puede ver <a href='https://drive.google.com/file/d/1FfXihRycX9Pdt-8yUN14Tzd4Bb_VguJC/view?usp=drive_link' target='_blank' className='italic text-blue-700'>aquí</a>.</p>
                                <p>Diseño de la aplicación:</p>
                                <ul className='px-4 mb-2'>
                                    <li>Iara Leiva</li>
                                    <li>Ornella Alonso Reyes</li>
                                    <li>Ariel Levita</li>
                                </ul>
                                <p>Desarrollo:</p>
                                <p className='px-4'>Ariel Levita</p>
                            </div>
                            <div>
                                <img src="./imagen-icono.png" alt="" className="w-16 h-16 mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </section>
    )
}

export default AboutPage