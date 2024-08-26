/* eslint-disable react/prop-types */
import { useRef } from 'react';
import Lottie from 'lottie-react';
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';


const TaskDescriptionPage = ({
    currentTitle = "",
    currentDescription = "",
    handleTitleChange,
    handleDescriptionChange
}) => {

    const lottieRef = useRef();

    return (
        <section className="h-full">
            <div className='h-full w-full bg-white p-4'>
                <div className='max-w-md h-full mx-auto'>
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="mb-4">
                                <h3 className='text-azul text-xl font-semibold mb-1'>Nombre de la tarea</h3>
                                <input
                                    className="bg-celeste rounded-lg w-full py-1 px-2"
                                    type="text"
                                    name="currentTitle"
                                    id="currentTitle"
                                    value={currentTitle}
                                    onChange={handleTitleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <h3 className='text-azul text-xl font-semibold mb-1'>Descripción</h3>
                                <textarea
                                    className="bg-celeste rounded-lg w-full px-2 py-1"
                                    name="currentDescription"
                                    id="currentDescription"
                                    rows={6}
                                    value={currentDescription}
                                    onChange={handleDescriptionChange}
                                />
                            </div>
                        </div>
                        <div className="my-8">
                            <Lottie
                                className='w-36 mx-auto'
                                lottieRef={lottieRef}
                                animationData={plant06}
                                loop={true}
                                speed={1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TaskDescriptionPage