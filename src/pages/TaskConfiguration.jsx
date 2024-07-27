import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';
import plant04 from '../assets/AnimatedPlants/plant04-animation.json';
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';
import plant07 from '../assets/AnimatedPlants/plant07-animation.json';
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';

const TaskConfiguration = () => {

    const [timerPlaceholder, setTimerPlaceholder] = useState(0)
    const [currentTask, setCurrentTask] = useState(null)
    const [taskTitles, setTaskTitles] = useState([])
    const [plants, setPlants] = useState([])

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        setCurrentTask(tasks.currentTask)
        setTimerPlaceholder(tasks.currentTask.timer)
        setPlants([
            { plant: plant01, name: plant01.nm, speed: 0.25 },
            { plant: plant02, name: plant02.nm, speed: 0.25 },
            { plant: plant06, name: plant06.nm, speed: 1 },
            { plant: plant04, name: plant04.nm, speed: 0.25 },
            { plant: plant07, name: plant07.nm, speed: 0.25 },
            { plant: plant09, name: plant09.nm, speed: 1 }
        ])
        setTaskTitles(tasks.otherTasks.map(task => task.title).splice(0, 2).concat(tasks.currentTask.title))
    }, [])

    const handleIncreaseTime = () => {
        setTimerPlaceholder(timerPlaceholder + 5);
    }

    const handleDecreaseTime = () => {
        setTimerPlaceholder(timerPlaceholder - 5);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedCurrentTask = {
            title: formData.get('title'),
            plant: plants.find((plant) => plant.name === formData.get('plant')),
            timer: timerPlaceholder
        };
        
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.currentTask = {
            ...tasks.currentTask,
            ...updatedCurrentTask,
        };
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setCurrentTask(tasks.currentTask);
    };

    return (
        <>
            <div className='h-full w-full bg-celeste'>
                <form onSubmit={handleSubmit} className='p-3'>
                    <div className='rounded-3xl shadow-lg bg-white *:border-b *:border-celeste p-2'>
                        <div className="last:border-none p-2">
                            <h3 className='text-azul text-center text-xl font-semibold mb-2'>Planta a dar vida</h3>
                            <div className='grid grid-cols-3 gap-4'>
                                {
                                    plants?.map((plant, index) => (
                                        <>
                                            <label
                                                className='relative max-h-24 aspect-square rounded-full bg-celeste has-[:checked]:bg-naranja drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)] p-2 mx-auto'
                                                key={index}
                                            >
                                                <Lottie
                                                    className='h-full mx-auto'
                                                    animationData={plant.plant}
                                                    loop={true}
                                                    speed={plant.speed}
                                                />
                                                <input
                                                    type="radio"
                                                    name='plant'
                                                    value={plant.name}
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
                                                    defaultChecked={plant.name == currentTask.plant.plant.nm}
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
                                    taskTitles?.map((title, index) => (
                                        <>
                                            <label
                                                key={index}
                                                className='group flex justify-center items-center w-1/3 bg-azul has-[:checked]:bg-naranja rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)] p-2'
                                                htmlFor={title}
                                            >
                                                <div className='hidden group-has-[:checked]:block  bg-azul rounded-full mr-2'>
                                                    <svg className='w-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                </div>
                                                <div className='text-white text-center group-has-[:checked]:text-azul'>{title}</div>
                                                <input type="radio" id={title} value={title} name='title' className='hidden' defaultChecked={title == currentTask.title} />
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
                                <span className='w-16 text-black text-3xl text-center'>{timerPlaceholder}:00</span>
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
                                    <span className='text-azul font-semibold uppercase'>{currentTask?.audio.label}</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='block w-9/10 mx-auto'> {/* cambiar a link */}
                            <button type='submit' formTarget='_blank' className='text-center w-full bg-naranja rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] p-4'>
                                <span className='text-black text-lg font-semibold uppercase'>guardar configuración</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default TaskConfiguration