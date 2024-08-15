/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LOCAL_STORAGE_KEY } from "../App";
import Lottie from 'lottie-react';
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';
import plant04 from '../assets/AnimatedPlants/plant04-animation.json';
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';
import plant07 from '../assets/AnimatedPlants/plant07-animation.json';
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';

const TaskConfiguration = ({
    currentDescription,
    currentTitle,
    currentTimer,
    selectedAudio,
    handlePlantChange,
    adjustTimerAmount,
    onSubmit
}) => {

    const sectionTitle = 'Diseño';
    const [taskTitles, setTaskTitles] = useState([])
    const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    const currentPlant = tasks.currentTask.plant;

    const plants = [
        { plant: plant01, name: plant01.nm, speed: 0.25 },
        { plant: plant02, name: plant02.nm, speed: 0.25 },
        { plant: plant06, name: plant06.nm, speed: 1 },
        { plant: plant04, name: plant04.nm, speed: 0.25 },
        { plant: plant07, name: plant07.nm, speed: 0.25 },
        { plant: plant09, name: plant09.nm, speed: 1 }
    ]

    useEffect(() => {
        setTaskTitles(tasks.otherTasks.map(task => task.title).splice(0, 2).concat(currentTitle))
    }, [currentTitle])

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedCurrentTask = {
            id: Date.now(),
            title: formData.get('title'),
            description: currentDescription,
            plant: plants.find((plant) => plant.name === formData.get('plant')),
            timer: currentTimer,
            audio: selectedAudio
        };
        onSubmit(updatedCurrentTask)
    };

    /* if (!currentPlant) {
        return <div>Loading...</div>;
    } */

    return (
        <section id={sectionTitle} className='h-full'>
            <div className='w-full bg-celeste'>
                <div className='max-w-md h-full mx-auto'>
                    <form onSubmit={handleSubmit} className='p-3'>
                        <div className='rounded-3xl shadow-lg bg-white *:border-b *:border-celeste py-2'>
                            <div className="last:border-none p-2">
                                <h3 className='text-azul text-center text-xl font-semibold mb-2'>Planta a dar vida</h3>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        plants?.map((plant, index) => (
                                            <>
                                                <label
                                                    key={index}
                                                    className='relative group max-h-24 aspect-square rounded-full bg-celeste has-[:checked]:bg-naranja drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)] p-2 mx-auto'
                                                >
                                                    <Lottie
                                                        className='h-full mx-auto'
                                                        animationData={plant.plant}
                                                        loop={true}
                                                        speed={plant.speed}
                                                    />
                                                    <div className='absolute top-0 -right-1 hidden group-has-[:checked]:block bg-azul rounded-full mr-2'>
                                                        <svg className='w-6 aspect-square fill-white z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name='plant'
                                                        value={plant.name}
                                                        className='absolute [appearance:none]'
                                                        defaultChecked={currentPlant?.name == plant.name}
                                                        onChange={handlePlantChange}
                                                    />
                                                </label>
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='last:border-none p-2'>
                                <h3 className='text-azul text-center text-xl font-semibold mb-2'>Tarea a realizar</h3>
                                <div className='flex justify-around gap-3 mb-2 px-2'>
                                    {
                                        taskTitles?.map((title, index) => (
                                            <>
                                                <label
                                                    key={index}
                                                    className='group flex justify-center items-center w-1/3 bg-azul has-[:checked]:bg-naranja rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)] p-2'
                                                    htmlFor={title}
                                                >
                                                    <div className='hidden group-has-[:checked]:block  bg-azul rounded-full mr-2'>
                                                        <svg className='w-6 aspect-square fill-white z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                    </div>
                                                    <div className='text-white text-center text-xs group-has-[:checked]:text-azul'>{title}</div>
                                                    <input
                                                        type="radio"
                                                        id={title}
                                                        value={title}
                                                        name='title'
                                                        className='hidden'
                                                        defaultChecked={index == 2}
                                                    />
                                                </label>
                                            </>
                                        ))
                                    }
                                </div>
                                <Link to="/newtask/taskdescription" className='block w-2/3 mx-auto'>
                                    <button type="button" className='flex items-center justify-center gap-2 w-full bg-celeste rounded-full shadow-md p-2'>
                                        <svg className='w-4 fill-azul' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                        <span className='text-azul font-semibold uppercase'>nueva tarea</span>
                                    </button>
                                </Link>
                            </div>
                            <div className='last:border-none p-2'>
                                <h3 className='text-azul text-center text-xl font-semibold mb-2'>Duración de la tarea</h3>
                                <div className='w-1/2 flex justify-between items-center mx-auto'>
                                    <button type='button' onClick={() => adjustTimerAmount(-5)}>
                                        <svg className="w-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-440v-80h560v80H200Z" /></svg>
                                    </button>
                                    <span className='w-16 text-black text-3xl text-center'>{currentTimer}:00</span>
                                    <button type='button' onClick={() => adjustTimerAmount(5)}>
                                        <svg className="w-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div className='last:border-none p-2'>
                                <h3 className='text-azul text-center text-xl font-semibold mb-2'>Música de ambiente</h3>
                                <Link to="/newtask/audioselector" className='block w-2/3 mx-auto'>
                                    <button type="button" className='flex items-center justify-center gap-2 w-full bg-celeste rounded-full shadow-lg p-2'>
                                        <svg className='w-4 fill-azul' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" /></svg>
                                        <span className='text-azul font-semibold uppercase'>{selectedAudio?.label}</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='p-4'>
                            <div className='block w-9/10 mx-auto'>
                                <button type='submit' className='text-center w-full bg-naranja rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] p-4'>
                                    <span className='text-black text-lg font-semibold uppercase'>guardar configuración</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TaskConfiguration