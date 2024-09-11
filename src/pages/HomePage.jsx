/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import Lottie from "lottie-react";
import Swal from 'sweetalert2';
import { LOCAL_STORAGE_KEY } from "../App";
import UsageLog from "../components/UsageLog";
import AnimatedPage from "../components/AnimatedPage";
import plant01 from "../assets/AnimatedPlants/plant01-animation.json";
// eslint-disable-next-line no-unused-vars
import plant02 from "../assets/AnimatedPlants/plant02-animation.json";
// eslint-disable-next-line no-unused-vars
import plant04 from "../assets/AnimatedPlants/plant04-animation.json";
// eslint-disable-next-line no-unused-vars
import plant06 from "../assets/AnimatedPlants/plant06-animation.json";
// eslint-disable-next-line no-unused-vars
import plant07 from "../assets/AnimatedPlants/plant07-animation.json";
// eslint-disable-next-line no-unused-vars
import plant09 from "../assets/AnimatedPlants/plant09-animation.json";

const HomePage = () => {

    const [isMuted, setIsMuted] = useState(false);
    // const [doNotDisturbOn, setDoNotDisturbOn] = useState(false);

    const lottieRef = useRef();
    const audioRef = useRef(null);

    const [timerValue, setTimerValue] = useState(0);
    const timerInSeconds = timerValue * 60;
    const [date, setDate] = useState(Date.now() + timerInSeconds * 1000);
    const countdownRef = useRef(null);
    const [countdownApi, setCountdownApi] = useState(null);

    const [currentTask, setCurrentTask] = useState(null);
    const [initialRecords, setInitialRecords] = useState([]);
    const [taskRunning, setTaskRunning] = useState(false);

    useEffect(() => {
        const defaultTask = {
            id: 1,
            title: "Estudiando",
            description: "",
            plant: { plant: plant01, name: plant01.nm, speed: 0.25 },
            timer: 40,
            audio: {
                id: "pianoMelody",
                name: "pianoMelody",
                value: "pianoMelody",
                label: "Melodía de piano",
                source: "/audios/piano.mp3",
            },
        };

        const today = new Date().toISOString().split("T")[0];

        const defaultNewTasks = {
            currentTask: defaultTask,
            otherTasks: [
                {
                    id: 1,
                    title: "Estudiando",
                    description:
                        "Esta tarea exite por defecto. Puede ser eliminada en la página de tareas guardadas.",
                    plant: { plant: plant01, name: plant01.nm, speed: 0.25 },
                    timer: 40,
                    audio: {
                        id: "pianoMelody",
                        name: "pianoMelody",
                        value: "pianoMelody",
                        label: "Melodía de piano",
                        source: "/audios/piano.mp3",
                    },
                },
                {
                    id: 2,
                    title: "Trabajando",
                    description:
                        "Esta tarea exite por defecto. Puede ser eliminada en la página de tareas guardadas.",
                    plant: { plant: plant04, name: plant04.nm, speed: 0.25 },
                    timer: 35,
                    audio: {
                        id: "guitarMelody",
                        name: "guitarMelody",
                        value: "guitarMelody",
                        label: "Melodía de guitarra",
                        source: "/audios/guitar.mp3",
                    },
                },
                {
                    id: 3,
                    title: "Limpiando",
                    description:
                        "Esta tarea exite por defecto. Puede ser eliminada en la página de tareas guardadas.",
                    plant: { plant: plant01, name: plant01.nm, speed: 0.25 },
                    timer: 25,
                    audio: {
                        id: "musicLoFi",
                        name: "musicLoFi",
                        value: "musicLoFi",
                        label: "Música Lo-Fi",
                        source: "/audios/lofi.mp3",
                    },
                },
            ],
            records: [{ date: today, minutes: 0 }],
            showNotifications: true,
        };

        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (!tasks) {
            setDefaultValues(defaultTask, defaultNewTasks, today);
        } else if (tasks.currentTask && tasks.otherTasks && tasks.records && tasks.showNotifications) {
            setCurrentTask(tasks.currentTask);
            setInitialRecords(tasks.records);
            setTimerValue(tasks.currentTask.timer);
        } else {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            setDefaultValues(defaultTask, defaultNewTasks, today);
        }
    }, []);

    useEffect(() => {
        lottieRef.current.pause();
    }, [currentTask])

    const setDefaultValues = (defaultTask, defaultNewTasks, today) => {
        setCurrentTask(defaultTask);
        const newTasks = defaultNewTasks;
        if (today) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
        }
        setTimerValue(defaultTask.timer);
        setInitialRecords(newTasks.records);
    }

    const playAudio = () => {
        toggleTaskRunning();
        const audioElement = audioRef.current;
        if (audioElement && currentTask.audio.source) {
            audioElement.pause();
            audioElement.src = currentTask.audio.source;
            audioElement.load();
            audioElement.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        }
    };

    const pauseAudio = () => {
        toggleTaskRunning();
        const audioElement = audioRef.current;
        if (audioElement && currentTask.audio.source) {
            audioElement.src = currentTask.audio.source;
            audioElement.pause();
        }
    };

    const toggleMute = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    /* const toggleDoNotDisturb = () => {
        setDoNotDisturbOn(!doNotDisturbOn);
    }; */

    const toggleTaskRunning = () => {
        setTaskRunning(!taskRunning);
    };

    useEffect(() => {
        setDate(Date.now() + timerInSeconds * 1000);
    }, [timerInSeconds]);

    useEffect(() => {
        if (countdownRef.current) {
            setCountdownApi(countdownRef.current.getApi());
        }
    }, [date]);

    const adjustTimerAmount = (minutes) => {
        setTimerValue(timerValue + minutes);
    };

    const handleStartClick = () => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        let showNotifications = tasks.showNotifications;
        if (showNotifications) {
            Swal.fire({
                text: 'Recuerde activar el modo "no molestar" de su teléfono para mejorar la experiencia.',
                icon: "warning",
                iconColor: "orange",
                customClass: {
                    confirmButton: "text-black font-medium bg-colorAcento rounded-lg w-full py-2 px-4 m-1",
                    cancelButton: "text-black font-medium rounded-lg w-full border border-black py-2 px-4 m-1"
                },
                buttonsStyling: false,
                didClose() {
                    countdownApi && countdownApi.start();
                    lottieRef.current.play();
                    playAudio();
                }
            });
        } else {
            countdownApi && countdownApi.start();
            lottieRef.current.play();
            playAudio();
        }
    };

    const handlePauseClick = () => {
        countdownApi && countdownApi.pause();
        lottieRef.current.pause();
        pauseAudio();
    };

    // TODO PASAR EL RELOJ Y TODO A UN COMPONENTE APARTE

    return (
        <section className="h-full">
            <AnimatedPage>
                <div className="relative overflow-hidden p-4 h-full">
                    <div className="absolute top-1/2 -right-1/2 -left-1/2 mx-auto w-[150%] h-screen rounded-full bg-colorPrincipal -z-10"></div>
                    <div className="flex flex-col max-w-md h-full mx-auto">
                        <div className="flex flex-row justify-between">
                            <Link to="/newtask/taskconfiguration" className="content-center w-14 h-14 p-2">
                                <button className="content-center w-12 h-12" aria-label="editar tarea">
                                    <svg
                                        className="w-10 aspect-square fill-colorAcento mx-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
                                    </svg>
                                </button>
                            </Link>
                            <div className="content-center p-2">
                                <button
                                    className="bg-colorPrincipal w-12 rounded-full p-2 ml-2"
                                    aria-label="mute"
                                    onClick={toggleMute}
                                >
                                    {isMuted ? (
                                        <svg
                                            className="w-8 aspect-square fill-colorSecundario mx-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 -960 960 960"
                                        >
                                            <path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z" />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="w-8 aspect-square fill-colorSecundario mx-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 -960 960 960"
                                        >
                                            <path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="[flex-grow:8] flex flex-col justify-around items-center py-8">
                            <h2 className="font-semibold text-3xl">{currentTask?.title}</h2>
                            <div>
                                <Lottie
                                    className="w-2/3 mx-auto"
                                    lottieRef={lottieRef}
                                    animationData={currentTask?.plant.plant}
                                    loop={true}
                                    speed={currentTask?.plant.speed}
                                />
                            </div>
                        </div>

                        <div className="flex justify-center items-center my-4">
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
                            <Countdown
                                className="text-5xl mx-6"
                                key={date}
                                ref={countdownRef}
                                date={date}
                                daysInHours={true}
                                onComplete={handlePauseClick}
                                autoStart={false}
                            />
                            <motion.button
                                type="button"
                                onClick={() => adjustTimerAmount(5)}
                                aria-label="sumar cinco minutos"
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

                        <div className="[flex-grow:2] flex justify-center items-center mb-8">
                            {taskRunning ? (
                                <motion.button
                                    className="flex justify-center items-center gap-3 w-2/3 bg-colorAcento rounded-full drop-shadow-lg p-4"
                                    type="button"
                                    aria-label="pausar"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    onClick={handlePauseClick}
                                >
                                    <svg
                                        className="w-8 fill-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" />
                                    </svg>
                                    <span className="text-black text-xl uppercase font-bold">
                                        pausar
                                    </span>
                                </motion.button>
                            ) : (
                                <motion.button
                                    className="flex justify-center items-center gap-3 w-2/3 bg-colorAcento rounded-full drop-shadow-lg p-4"
                                    type="button"
                                    aria-label="iniciar"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    onClick={handleStartClick}
                                >
                                    <svg
                                        className="w-8 fill-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -960 960 960"
                                    >
                                        <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
                                    </svg>
                                    <span className="text-black text-xl uppercase font-bold">
                                        iniciar
                                    </span>
                                </motion.button>
                            )}
                        </div>
                    </div>
                </div>

                <audio ref={audioRef} preload="auto" crossOrigin="anonymous" loop />

                {initialRecords?.length > 0 && <UsageLog isRunning={taskRunning} />}
            </AnimatedPage>
        </section>
    );
};

export default HomePage;
