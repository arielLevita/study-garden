/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import Lottie from 'lottie-react';
import { LOCAL_STORAGE_KEY } from "../App";
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
// eslint-disable-next-line no-unused-vars
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';
// eslint-disable-next-line no-unused-vars
import plant04 from '../assets/AnimatedPlants/plant04-animation.json';
// eslint-disable-next-line no-unused-vars
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';
// eslint-disable-next-line no-unused-vars
import plant07 from '../assets/AnimatedPlants/plant07-animation.json';
// eslint-disable-next-line no-unused-vars
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';
import UsageLog from '../components/UsageLog';

const HomePage = () => {

    const defaultTask = {
        id: 1,
        title: 'Estudiando',
        description: '',
        plant: { plant: plant01, name: plant01.nm, speed: 0.25 },
        timer: 40,
        audio: {
            id: 'pianoMelody',
            name: 'pianoMelody',
            value: 'pianoMelody',
            label: 'Melodía de piano',
            source: 'https://cdn.pixabay.com/download/audio/2024/04/12/audio_85e1122b59.mp3'
        },
    }

    const [isMuted, setIsMuted] = useState(false);
    const [doNotDisturbOn, setDoNotDisturbOn] = useState(false);

    const lottieRef = useRef();
    const audioRef = useRef(null);

    const [timerValue, setTimerValue] = useState(0)
    const timerInSeconds = timerValue * 60
    const [date, setDate] = useState(Date.now() + (timerInSeconds * 1000));
    const countdownRef = useRef(null);
    const [countdownApi, setCountdownApi] = useState(null);

    const [currentTask, setCurrentTask] = useState(null);
    const [taskRunning, setTaskRunning] = useState(false);

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (tasks) {
            setCurrentTask(tasks.currentTask);
            setTimerValue(tasks.currentTask.timer);
        } else {
            setCurrentTask(defaultTask);
            const newTasks = {
                currentTask: defaultTask,
                otherTasks: [
                    {
                        id: 1,
                        title: 'Estudiando',
                        description: 'Esta tarea exite por defecto. Puede ser eliminada en la página de tareas guardadas.',
                        plant: { plant: plant01, name: plant01.nm, speed: 0.25 },
                        timer: 40,
                        audio: {
                            id: 'pianoMelody',
                            name: 'pianoMelody',
                            value: 'pianoMelody',
                            label: 'Melodía de piano',
                            source: 'https://cdn.pixabay.com/download/audio/2024/04/12/audio_85e1122b59.mp3'
                        },
                    },
                    {
                        id: 2,
                        title: 'Trabajando',
                        description: 'Esta tarea exite por defecto. Puede ser eliminada en la página de tareas guardadas.',
                        plant: { plant: plant04, name: plant04.nm, speed: 0.25 },
                        timer: 35,
                        audio: {
                            id: 'guitarMelody',
                            name: 'guitarMelody',
                            value: 'guitarMelody',
                            label: 'Melodía de guitarra',
                            source: 'https://cdn.pixabay.com/download/audio/2023/06/19/audio_871c28dde0.mp3'
                        },
                    },
                    {
                        id: 3,
                        title: 'Limpiando',
                        description: 'Esta tarea exite por defecto. Puede ser eliminada en la página de tareas guardadas.',
                        plant: { plant: plant01, name: plant01.nm, speed: 0.25 },
                        timer: 25,
                        audio: {
                            id: 'musicLoFi',
                            name: 'musicLoFi',
                            value: 'musicLoFi',
                            label: 'Música Lo-Fi',
                            source: 'https://cdn.pixabay.com/audio/2024/01/15/audio_9914e58808.mp3'
                        },
                    },
                ],
                records: []
            };
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
            setTimerValue(defaultTask.timer);
        }
    }, []);

    const playAudio = () => {
        toggleTaskRunning();
        const audioElement = audioRef.current;
        if (audioElement && currentTask.audio.source) {
            audioElement.src = currentTask.audio.source;
            audioElement.play().catch(error => {
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

    const toggleDoNotDisturb = () => {
        setDoNotDisturbOn(!doNotDisturbOn);
    };

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
    }

    const handleStartClick = () => {
        countdownApi && countdownApi.start();
        lottieRef.current.play()
        playAudio();
    };

    const handlePauseClick = () => {
        countdownApi && countdownApi.pause();
        lottieRef.current.pause()
        pauseAudio();
    };

    return (
        <section className='h-full'>
            <div className="relative overflow-hidden p-4 h-full">
                <div className="absolute top-1/2 -right-1/2 -left-1/2 mx-auto w-[150%] h-screen rounded-full bg-celeste -z-10"></div>
                <div className='flex flex-col max-w-md h-full mx-auto'>
                    <div className="flex flex-row justify-between">
                        <Link to="/newtask/taskconfiguration">
                            <button className="content-center">
                                <svg className="w-10 aspect-square fill-naranja mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                            </button>
                        </Link>
                        <div>
                            <button className="bg-celeste rounded-full p-2 ml-2" onClick={toggleDoNotDisturb}>
                                {doNotDisturbOn
                                    ? <svg className="w-8 aspect-square fill-azul mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m635-440-80-80h125v80h-45Zm-228-80v80H280v-80h127ZM819-28 701-146q-48 32-103.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-62 17-117.5T146-701L27-820l57-57L876-85l-57 57ZM480-160q45 0 85.5-12t76.5-33L205-642q-21 36-33 76.5T160-480q0 133 93.5 226.5T480-160Zm335-100-59-59q21-35 32.5-75.5T800-480q0-133-93.5-226.5T480-800q-45 0-85.5 11.5T319-756l-59-59q48-31 103.5-48T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 61-17 116.5T815-260ZM538-538ZM424-424Z" /></svg>
                                    : <svg className="w-8 aspect-square fill-azul mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                }
                            </button>
                            <button className="bg-celeste rounded-full p-2 ml-2" onClick={toggleMute}>
                                {isMuted
                                    ? <svg className="w-8 aspect-square fill-azul mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z" /></svg>
                                    : <svg className="w-8 aspect-square fill-azul mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z" /></svg>}
                            </button>
                        </div>
                    </div>

                    <div className="[flex-grow:8] flex flex-col justify-around items-center py-8">
                        <h2 className="font-semibold text-3xl">{currentTask?.title}</h2>
                        <div>
                            <Lottie
                                className='w-2/3 mx-auto'
                                lottieRef={lottieRef}
                                animationData={currentTask?.plant.plant}
                                loop={true}
                                speed={currentTask?.plant.speed}
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center my-4">
                        <button type='button' onClick={() => adjustTimerAmount(-5)}>
                            <svg className="w-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-440v-80h560v80H200Z" /></svg>
                        </button>
                        <Countdown
                            className="text-5xl mx-6"
                            key={date}
                            ref={countdownRef}
                            date={date}
                            daysInHours={true}
                            onComplete={handlePauseClick}
                            autoStart={false}
                        />
                        <button type='button' onClick={() => adjustTimerAmount(5)}>
                            <svg className="w-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                        </button>
                    </div>

                    <div className='[flex-grow:2] flex justify-center items-center mb-8'>
                        {
                            taskRunning
                                ? <button
                                    className="flex justify-center items-center gap-3 w-2/3 bg-naranja rounded-full p-4"
                                    type="button"
                                    onClick={handlePauseClick}
                                >
                                    <svg className="w-8 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z" /></svg>
                                    <span className="text-black text-xl uppercase font-bold">pausar</span>
                                </button>
                                : <button
                                    className="flex justify-center items-center gap-3 w-2/3 bg-naranja rounded-full p-4"
                                    type="button"
                                    onClick={handleStartClick}
                                >
                                    <svg className="w-8 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" /></svg>
                                    <span className="text-black text-xl uppercase font-bold">iniciar</span>
                                </button>
                        }
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                preload="auto"
                crossOrigin="anonymous"
                loop
            />

            <UsageLog isRunning={taskRunning} />
        </section>
    )
}

export default HomePage