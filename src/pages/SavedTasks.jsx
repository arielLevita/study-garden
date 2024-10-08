import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../App";
import Lottie from "lottie-react";
import AnimatedPage from "../components/AnimatedPage";

const SavedTasks = () => {
    const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    let savedTasks = tasks.otherTasks.sort((a, b) => b.id - a.id);
    const [selectedTask, setSelectedTask] = useState(tasks.currentTask);

    const navigate = useNavigate();

    const handleTaskChange = (event) => {
        setSelectedTask(
            savedTasks.find((task) => task.id === Number(event.target.value))
        );
    };

    const handleDeleteTask = () => {
        savedTasks = savedTasks.filter((task) => task.id !== selectedTask.id);
        tasks.otherTasks = savedTasks;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
        setSelectedTask(savedTasks[0]);
    };

    const handleLoadTask = () => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        tasks.currentTask = selectedTask;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
        navigate("/");
    };

    return (
        <section className="h-full w-full bg-white">
            <AnimatedPage>
                <div>
                    <div className="flex flex-col max-w-md h-full mx-auto">
                        <div className="h-[calc(100vh-228px)] overflow-y-scroll p-4">
                            <h3 className='text-colorSecundario text-xl font-semibold mb-4'>Seleccione una tarea</h3>
                            <div className="grid grid-cols-2 gap-6">
                                {savedTasks?.map((task) => (
                                    <label
                                        key={task.id}
                                        className="
                                        relative 
                                        group 
                                        flex 
                                        flex-col 
                                        justify-between 
                                        w-full 
                                        h-56 
                                        bg-colorPrincipal 
                                        rounded-lg 
                                        border 
                                        border-gray-500 
                                        has-[:checked]:bg-colorAcento 
                                        has-[:checked]:scale-105 
                                        has-[:checked]:shadow-lg 
                                        drop-shadow-md
                                        p-2"
                                    >
                                        <div className="absolute -top-2 -right-4 hidden group-has-[:checked]:block bg-colorSecundario rounded-full mr-2">
                                            <svg
                                                className="w-6 aspect-square fill-white z-10"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 -960 960 960"
                                            >
                                                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="radio"
                                            name="savedtask"
                                            value={task.id}
                                            className="hidden"
                                            // defaultChecked={tasks.currentTask?.title == task.title}
                                            onChange={handleTaskChange}
                                        />
                                        <h4 className="text-lg [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden text-ellipsis">{task.title}</h4>
                                        <div>
                                            <Lottie
                                                className="w-2/3 aspect-square bg-colorSecundario rounded-full p-2 mx-auto"
                                                animationData={task.plant.plant}
                                                loop={true}
                                                speed={task.plant.speed}
                                            />
                                            <p className="text-xl text-center font-semibold mt-1">
                                                {task.timer}:00
                                            </p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="w-full flex justify-around items-center bg-white py-4">
                            <button
                                type="button"
                                aria-label="eliminar"
                                className="w-2/5 bg-white rounded-full border border-colorSecundario p-2"
                                onClick={handleDeleteTask}
                            >
                                <span className="text-center uppercase text-colorSecundario font-semibold">
                                    eliminar
                                </span>
                            </button>
                            <button
                                type="button"
                                aria-label="cargar"
                                className="w-2/5 bg-colorAcento rounded-full p-2"
                                onClick={handleLoadTask}
                            >
                                <span className="text-center uppercase text-colorSecundario font-semibold">
                                    cargar
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </AnimatedPage>
        </section>
    );
};

export default SavedTasks;
