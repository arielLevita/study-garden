import { useEffect, useState, useRef } from "react"
import { LOCAL_STORAGE_KEY } from "../App";
import Lottie from 'lottie-react';
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';

const TasksListPage = () => {

    const [savedTasks, setSavedTasks] = useState([]);
    const lottieRef = useRef();

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        setSavedTasks(tasks.otherTasks.sort((a, b) => b.id - a.id));
    }, [])

    return (
        <section className="h-full w-full">
            <div className="flex flex-col justify-between h-full">
                <div className="w-full px-4 bg-white overflow-y-scroll">
                    <h3 className='text-azul text-xl font-semibold my-6'>Detalles de tareas</h3>
                    <div className="grid divide-y divide-neutral-200 mx-auto">
                        {
                            savedTasks?.map((task) => (
                                <div className="pb-6" key={task.id}>
                                    <details className="group">
                                        <summary className="flex justify-between items-center text-black font-medium rounded cursor-pointer list-none bg-celeste px-2 py-1">
                                            <span>{task.title} - {task.timer}:00</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="border border-celeste border-t-0 p-4">
                                            <p className="text-neutral-600 text-sm group-open:animate-fadeIn">
                                                Audio: {task.audio.label}
                                            </p>
                                            <p className="text-neutral-600 text-sm group-open:animate-fadeIn">
                                                Descripción: {task.description}
                                            </p>
                                        </div>
                                    </details>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="my-8">
                    <Lottie
                        className='w-36 mx-auto'
                        lottieRef={lottieRef}
                        animationData={plant09}
                        loop={true}
                        speed={1}
                    />
                </div>
            </div>
        </section>
    )
}

export default TasksListPage