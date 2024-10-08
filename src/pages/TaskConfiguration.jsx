/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { useState } from "react";
import Lottie from "lottie-react";
import AnimatedPage from "../components/AnimatedPage";

const TaskConfiguration = ({
    plants,
    taskTitles,
    currentDescription,
    selectedTitle,
    currentTimer,
    currentPlant,
    handlePlantChange,
    handleSelectedTitle,
    selectedAudio,
    adjustTimerAmount,
    onSubmit,
}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedCurrentTask = {
            id: Date.now(),
            title: formData.get("title"),
            description: currentDescription,
            plant: plants.find((plant) => plant.name === formData.get("plant")),
            timer: currentTimer,
            audio: selectedAudio,
        };
        onSubmit(updatedCurrentTask);
    };

    if (!currentPlant || !taskTitles)  {
        return <div>Loading...</div>;
    }

    return (
        <section className="h-full bg-colorPrincipal">
            <AnimatedPage>
                <div className="w-full">
                    <div className="max-w-md h-full mx-auto">
                        <form onSubmit={handleSubmit} className="p-3">
                            <div className="rounded-3xl shadow-lg bg-white *:border-b *:border-colorPrincipal py-2">
                                <div className="last:border-none p-2">
                                    <h3 className="text-colorSecundario text-center text-xl font-semibold mb-2">
                                        Planta a dar vida
                                    </h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        {plants?.map((plant) => (
                                            <div key={plant.name} className="relative w-full max-w-24 aspect-square max-h-24 rounded-full mx-auto">
                                                <label
                                                    className="group block w-full h-full rounded-full bg-colorPrincipal has-[:checked]:bg-colorAcento has-[:checked]:scale-110 has-[:checked]:shadow-lg p-2"
                                                >
                                                    <Lottie
                                                        className="h-full mx-auto"
                                                        animationData={plant.plant}
                                                        loop={true}
                                                        speed={plant.speed}
                                                    />
                                                    <div className="absolute top-0 -right-1 hidden group-has-[:checked]:block bg-colorSecundario rounded-full mr-2">
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
                                                        name="plant"
                                                        value={plant.name}
                                                        className="absolute top-0 left-0 hidden"
                                                        defaultChecked={currentPlant == plant.name}
                                                        onChange={handlePlantChange}
                                                    />
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="last:border-none p-2">
                                    <h3 className="text-colorSecundario text-center text-xl font-semibold mb-2">
                                        Tarea a realizar
                                    </h3>
                                    <div className="flex justify-around gap-3 mb-2 px-2">
                                        {taskTitles?.map((title, index) => (
                                            <div key={index} className="w-1/3">
                                                <label
                                                    className="group flex items-center justify-center w-full h-10 bg-colorSecundario has-[:checked]:bg-colorAcento rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.15)] p-2"
                                                    htmlFor={title}
                                                >
                                                    <div className="hidden w-fit group-has-[:checked]:block bg-colorSecundario rounded-full mr-2">
                                                        <svg
                                                            className="w-6 aspect-square fill-white z-10"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 -960 960 960"
                                                        >
                                                            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-white text-center text-xs [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden text-ellipsis group-has-[:checked]:text-colorSecundario">
                                                        {title}
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        id={title}
                                                        value={title}
                                                        name="title"
                                                        className="hidden"
                                                        checked={selectedTitle === title}
                                                        onChange={handleSelectedTitle}
                                                    />
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        to="/newtask/taskdescription"
                                        className="block w-2/3 mx-auto"
                                    >
                                        <button
                                            type="button"
                                            aria-label="nueva tarea"
                                            className="flex items-center justify-center gap-2 w-full bg-colorPrincipal rounded-full drop-shadow-md p-2"
                                        >
                                            <svg
                                                className="w-4 fill-colorSecundario"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 -960 960 960"
                                            >
                                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                            </svg>
                                            <span className="text-colorSecundario font-semibold uppercase">
                                                nueva tarea
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                                <div className="last:border-none p-2">
                                    <h3 className="text-colorSecundario text-center text-xl font-semibold mb-2">
                                        Duración de la tarea
                                    </h3>
                                    <div className="w-1/2 flex justify-between items-center mx-auto">
                                        <motion.button
                                            type="button"
                                            aria-label="restar cinco minutos"
                                            onClick={() => adjustTimerAmount(-5)}
                                            className="rounded-full p-2"
                                            whileTap={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                                        >
                                            <svg
                                                className="w-6 fill-black"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 -960 960 960"
                                            >
                                                <path d="M200-440v-80h560v80H200Z" />
                                            </svg>
                                        </motion.button>
                                        <span className="w-16 text-black text-3xl text-center">
                                            {currentTimer}:00
                                        </span>
                                        <motion.button
                                            type="button"
                                            aria-label="sumar cinco minutos"
                                            onClick={() => adjustTimerAmount(5)}
                                            className="rounded-full p-2"
                                            whileTap={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                                        >
                                            <svg
                                                className="w-6 fill-black"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 -960 960 960"
                                            >
                                                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                                            </svg>
                                        </motion.button>
                                    </div>
                                </div>
                                <div className="last:border-none p-2">
                                    <h3 className="text-colorSecundario text-center text-xl font-semibold mb-2">
                                        Música de ambiente
                                    </h3>
                                    <Link
                                        to="/newtask/audioselector"
                                        className="block w-2/3 mx-auto"
                                    >
                                        <button
                                            type="button"
                                            aria-label="elegir audio"
                                            className="flex items-center justify-center gap-2 w-full bg-colorPrincipal rounded-full shadow-lg p-2"
                                        >
                                            <svg
                                                className="w-4 fill-colorSecundario"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 -960 960 960"
                                            >
                                                <path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" />
                                            </svg>
                                            <span className="text-colorSecundario font-semibold uppercase">
                                                {selectedAudio?.label}
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="block w-9/10 mx-auto">
                                    <motion.button
                                        type="submit"
                                        aria-label="guardar configuración"
                                        className="text-center w-full bg-colorAcento rounded-full drop-shadow-[0_3px_3px_rgba(0,0,0,0.25)] p-4"
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <span className="text-black text-lg font-semibold uppercase">
                                            guardar configuración
                                        </span>
                                    </motion.button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </AnimatedPage>
        </section>
    );
};

export default TaskConfiguration;
