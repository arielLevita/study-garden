import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';
import plant04 from '../assets/AnimatedPlants/plant04-animation.json';
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';
import plant07 from '../assets/AnimatedPlants/plant07-animation.json';
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';

const TaskConfiguration = () => {

    const [timerPlaceholder, setTimerPlaceholder] = useState(40)
    const [currentAudio, setCurrentAudio] = useState('')

    const defaultAudio = {
        id: 'musicLoFi',
        name: 'musicLoFi',
        value: 'musicLoFi',
        label: 'Música Lo-Fi',
        // source: 'https://cdn.pixabay.com/audio/2024/01/15/audio_9914e58808.mp3'
        source: ''
    }

    const plants = [
        { plant: plant01, speed: 0.25 },
        { plant: plant02, speed: 0.25 },
        { plant: plant06, speed: 1 },
        { plant: plant04, speed: 0.25 },
        { plant: plant07, speed: 0.25 },
        { plant: plant09, speed: 1 }
    ]

    const nombresDeTareas = ['Estudio', 'Limpieza', 'Trabajo']

    useEffect(() => {
        currentAudio /* THE selectedAudio VALUE FROM AudioSelector.jsx */
        ? setCurrentAudio(currentAudio /* THE selectedAudio VALUE FROM AudioSelector.jsx */)
        : setCurrentAudio(defaultAudio)
        console.log(currentAudio)
    }, [])


    const handleIncreaseTime = () => {
        setTimerPlaceholder(timerPlaceholder + 5);
    }

    const handleDecreaseTime = () => {
        setTimerPlaceholder(timerPlaceholder - 5);
    }

    return (
        <>
            <div className='h-full w-full bg-celeste'>
                <form action="" method="post" className='p-3'>
                    <div className='rounded-3xl shadow-lg bg-white *:border-b *:border-celeste p-2'>
                        <div className="last:border-none p-2">
                            <h3 className='text-azul text-center text-xl font-semibold mb-2'>Planta a dar vida</h3>
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    plants?.map((plant) => (
                                        <>
                                            <label
                                                className='relative max-h-24 aspect-square rounded-full bg-celeste has-[:checked]:bg-naranja drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)] p-2 mx-auto'
                                                key={plant.plant}
                                            >
                                                <Lottie
                                                    className='h-full mx-auto'
                                                    animationData={plant.plant}
                                                    loop={true}
                                                    speed={plant.speed}
                                                />
                                                <input
                                                    type="radio"
                                                    name='plantAnimation'
                                                    className='
                                                        absolute 
                                                        top-2
                                                        right-0
                                                        [appearance:none]
                                                        checked:before:block
                                                        checked:before:[content:""]
                                                        checked:before:w-6 
                                                        checked:before:aspect-square
                                                        checked:before:bg-azul
                                                        checked:before:bg-[url("check_white.svg")]
                                                        checked:before:rounded-full
                                                        checked:before:bg-no-repeat
                                                        checked:before:bg-center'
                                                    defaultChecked={plant.plant == plant01}
                                                />
                                            </label>
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='last:border-none p-2'>
                            <h3 className='text-azul text-center text-xl font-semibold mb-2'>Tarea a realizar</h3>
                            <div className='flex justify-around gap-3 mb-2'>
                                {
                                    nombresDeTareas?.map((nombre) => (
                                        <>
                                            <label
                                                key={nombre}
                                                className='group flex justify-center items-center w-1/3 bg-azul has-[:checked]:bg-naranja rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)] p-2'
                                                htmlFor={nombre}
                                            >
                                                <div className='hidden group-has-[:checked]:block  bg-azul rounded-full mr-2'>
                                                    <svg className='w-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                </div>
                                                <div className='text-white group-has-[:checked]:text-azul'>{nombre}</div>
                                                <input type="radio" id={nombre} name='nombreDeTarea' className='hidden' defaultChecked={nombre == 'Trabajo'} />
                                            </label>
                                        </>
                                    ))
                                }
                            </div>
                            <a href="" className='block w-2/3 mx-auto'>
                                <button type="button" className='flex items-center justify-center gap-2 w-full bg-celeste rounded-full shadow-md p-2'>
                                    <svg className='w-4 fill-azul' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                    <span className='text-azul font-semibold uppercase'>nueva tarea</span>
                                </button>
                            </a>
                        </div>
                        <div className='last:border-none p-2'>
                            <h3 className='text-azul text-center text-xl font-semibold mb-2'>Duración de la tarea</h3>
                            <div className='w-1/2 flex justify-between items-center mx-auto'>
                                <button type='button' onClick={handleDecreaseTime}>
                                    <svg className="w-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-440v-80h560v80H200Z" /></svg>
                                </button>
                                <input
                                    type="number"
                                    className='w-16 placeholder:text-black text-3xl text-right'
                                    placeholder={timerPlaceholder}
                                />
                                <span className='w-16 text-black text-3xl text-left'>:00</span>
                                <button type='button' onClick={handleIncreaseTime}>
                                    <svg className="w-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className='last:border-none p-2'>
                            <h3 className='text-azul text-center text-xl font-semibold mb-2'>Música de ambiente</h3>
                            <a href="" className='block w-2/3 mx-auto'>
                                <button type="button" className='flex items-center justify-center gap-2 w-full bg-celeste rounded-full shadow-lg p-2'>
                                    <svg className='w-4 fill-azul' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" /></svg>
                                    <span className='text-azul font-semibold uppercase'>{currentAudio.label}</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='p-4'>
                        <a href="" className='block w-9/10 mx-auto'>
                            <button type="submit" className='text-center w-full bg-naranja rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] p-4'>
                                <span className='text-black text-lg font-semibold uppercase'>guardar configuración</span>
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaskConfiguration