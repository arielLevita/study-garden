import { useEffect, useState, useRef } from "react"
import { LOCAL_STORAGE_KEY } from "../App";
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';
import AnimatedPage from "../components/AnimatedPage";

const TasksListPage = () => {

    const [savedTasks, setSavedTasks] = useState([]);
    const lottieRef = useRef();

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        setSavedTasks(tasks.otherTasks.sort((a, b) => b.id - a.id));
    }, [])

    return (
        <section className="h-full w-full bg-celeste">
            <AnimatedPage>
                <div className="flex flex-col justify-between max-w-md h-full mx-auto">
                    <div className="w-full px-4 overflow-y-scroll">
                        <h3 className='text-azul text-xl font-semibold my-6'>Detalles de tareas</h3>
                        <div className="grid divide-y divide-neutral-200 mx-auto">
                            {
                                savedTasks?.map((task) => (
                                    <div className="pb-6" key={task.id}>
                                        <details className="group">
                                            <motion.summary
                                                whileTap={{ scale: 0.97 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                className="flex justify-between items-center text-neutral-900 font-semibold rounded shadow-md cursor-pointer list-none bg-white px-2 py-1"
                                            >
                                                <span>{task.title} - {task.timer}:00</span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                            </motion.summary>
                                            <div className="bg-white bg-opacity-35 rounded shadow backdrop-blur-sm border border-opacity-20 border-white mt-2 p-4">
                                                <p className="text-neutral-800 text-sm font-medium group-open:animate-fadeIn">
                                                    Audio: {task.audio.label}
                                                </p>
                                                <p className="text-neutral-800 text-sm font-medium group-open:animate-fadeIn">
                                                    Descripción: {task.description}
                                                </p>
                                            </div>
                                        </details>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mb-8">
                        <Lottie
                            className='w-36 mx-auto'
                            lottieRef={lottieRef}
                            animationData={plant09}
                            loop={true}
                            speed={1}
                        />
                    </div>
                </div>
            </AnimatedPage>
        </section>
    )
}

export default TasksListPage