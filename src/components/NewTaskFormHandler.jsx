/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from "../App";
import AudioSelector from '../pages/AudioSelector';
import TaskConfiguration from '../pages/TaskConfiguration';
import TaskDescriptionPage from '../pages/TaskDescriptionPage';
import plant01 from "../assets/AnimatedPlants/plant01-animation.json";
import plant02 from "../assets/AnimatedPlants/plant02-animation.json";
import plant04 from "../assets/AnimatedPlants/plant04-animation.json";
import plant06 from "../assets/AnimatedPlants/plant06-animation.json";
import plant07 from "../assets/AnimatedPlants/plant07-animation.json";
import plant09 from "../assets/AnimatedPlants/plant09-animation.json";



// TODO PROBLEMA CON CURRENTPlant


const NewTaskFormHandler = () => {
    
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);
    const [currentPlant, setCurrentPlant] = useState(null)
    const [currentTimer, setCurrentTimer] = useState(0);
    const [currentTitle, setCurrentTitle] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const [currentDescription, setCurrentDescription] = useState("");
    const [taskTitles, setTaskTitles] = useState([]);
    const navigate = useNavigate();

    const audios = [
        {
            id: 'noSound',
            name: 'noSound',
            value: 'noSound',
            label: 'Sin música',
            source: ''
        },
        {
            id: 'musicLoFi',
            name: 'musicLoFi',
            value: 'musicLoFi',
            label: 'Música Lo-Fi',
            source: '/audios/lofi.mp3'
        },
        {
            id: 'pianoMelody',
            name: 'pianoMelody',
            value: 'pianoMelody',
            label: 'Melodía de piano',
            source: '/audios/piano.mp3'
        },
        {
            id: 'guitarMelody',
            name: 'guitarMelody',
            value: 'guitarMelody',
            label: 'Melodía de guitarra',
            source: '/audios/guitar.mp3'
        },
        {
            id: 'rainSound',
            name: 'rainSound',
            value: 'rainSound',
            label: 'Sonido de lluvia',
            source: '/audios/lluvia.mp3'
        },
        {
            id: 'waveSound',
            name: 'waveSound',
            value: 'waveSound',
            label: 'Sonido de olas',
            source: '/audios/olas.mp3'
        },
    ];

    const plants = [
        { plant: plant01, name: plant01.nm, speed: 0.25 },
        { plant: plant02, name: plant02.nm, speed: 0.25 },
        { plant: plant06, name: plant06.nm, speed: 1 },
        { plant: plant04, name: plant04.nm, speed: 0.25 },
        { plant: plant07, name: plant07.nm, speed: 0.25 },
        { plant: plant09, name: plant09.nm, speed: 1 },
    ];

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        setCurrentTask(tasks.currentTask)
        setSelectedAudio(tasks.currentTask.audio);
        setCurrentPlant(tasks.currentTask.plant.name);
        setCurrentTimer(tasks.currentTask.timer);
        setCurrentTitle(tasks.currentTask.title);
        setSelectedTitle(tasks.currentTask.title);
        setCurrentDescription(tasks.currentTask.description);
    }, [])
    
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        const filteredTasks = tasks.otherTasks
            .filter((task) => task.title !== currentTitle)
            .splice(0, 2);
        setTaskTitles([...filteredTasks.map((task) => task.title), currentTitle]);
    }, [currentTitle]);

    const adjustTimerAmount = (minutes) => {
        setCurrentTimer(currentTimer + minutes);
    }

    const handleTitleChange = (event) => {
        setCurrentTitle(event.target.value);
    };
    
    const handleSelectedTitle = (event) => {
        setSelectedTitle(event.target.value);
    };

    const handlePlantChange = (event) => {
        setCurrentPlant(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setCurrentDescription(event.target.value);
    };

    const handleAudioChange = (event) => {
        setSelectedAudio(audios.find(audio => audio.value === event.target.value))
    }

    const onSubmit = (updatedCurrentTask) => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        tasks.currentTask = {
            ...tasks.currentTask,
            ...updatedCurrentTask,
        };
        tasks.otherTasks = [
            ...tasks.otherTasks,
            {
                ...tasks.currentTask,
                id: tasks.currentTask.id
            }]
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
        setCurrentTask({ ...currentTask, ...updatedCurrentTask });
        setTimeout(() => {navigate('/')}, 500);
    };

    return (
        <>
            <div className='h-full w-full overflow-y-auto bg-colorPrincipal'>
                <Routes>
                    <Route path={'taskconfiguration'} element={
                        <TaskConfiguration
                            plants={plants}
                            taskTitles={taskTitles}
                            currentTask={currentTask}
                            currentPlant={currentPlant}
                            currentTitle={currentTitle}
                            selectedTitle={selectedTitle}
                            currentDescription={currentDescription}
                            currentTimer={currentTimer}
                            selectedAudio={selectedAudio}
                            handlePlantChange={handlePlantChange}
                            adjustTimerAmount={adjustTimerAmount}
                            handleTitleChange={handleTitleChange}
                            handleSelectedTitle={handleSelectedTitle}
                            onSubmit={onSubmit}
                        />
                    } />
                    <Route path={'audioselector'} element={
                        <AudioSelector
                        audios={audios}
                        selectedAudio={selectedAudio}
                        handleAudioChange={handleAudioChange}
                    />
                    } />
                    <Route path={'taskdescription'} element={
                        <TaskDescriptionPage
                        currentTitle={currentTitle}
                        currentDescription={currentDescription}
                        handleTitleChange={handleTitleChange}
                        handleDescriptionChange={handleDescriptionChange}
                    />
                    } />
                </Routes>
            </div>
        </>
    )
}

export default NewTaskFormHandler