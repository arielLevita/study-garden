import { useState, useEffect } from 'react';
import AudioSelector from './AudioSelector';
import TaskConfiguration from '../pages/TaskConfiguration';
import plant01 from '../assets/AnimatedPlants/plant01-animation.json';
import plant02 from '../assets/AnimatedPlants/plant02-animation.json';
import plant04 from '../assets/AnimatedPlants/plant04-animation.json';
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';
import plant07 from '../assets/AnimatedPlants/plant07-animation.json';
import plant09 from '../assets/AnimatedPlants/plant09-animation.json';
import TaskDescriptionPage from '../pages/TaskDescriptionPage';

const NewTaskFormHandler = () => {

    const [selectedAudio, setSelectedAudio] = useState(null);
    const [currentTask, setCurrentTask] = useState(null)
    const [currentTimer, setCurrentTimer] = useState(0);
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentPlant, setCurrentPlant] = useState(null);
    const [currentDescription, setCurrentDescription] = useState('');

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
            source: 'https://cdn.pixabay.com/audio/2024/01/15/audio_9914e58808.mp3'
        },
        {
            id: 'pianoMelody',
            name: 'pianoMelody',
            value: 'pianoMelody',
            label: 'Melodía de piano',
            source: 'https://cdn.pixabay.com/download/audio/2024/04/12/audio_85e1122b59.mp3'
        },
        {
            id: 'guitarMelody',
            name: 'guitarMelody',
            value: 'guitarMelody',
            label: 'Melodía de guitarra',
            source: 'https://cdn.pixabay.com/download/audio/2023/06/19/audio_871c28dde0.mp3'
        },
        {
            id: 'rainSound',
            name: 'rainSound',
            value: 'rainSound',
            label: 'Sonido de lluvia',
            source: 'https://cdn.pixabay.com/download/audio/2024/05/21/audio_08ef8717b4.mp3'
        },
        {
            id: 'waveSound',
            name: 'waveSound',
            value: 'waveSound',
            label: 'Sonido de olas',
            source: 'https://cdn.pixabay.com/download/audio/2021/08/09/audio_165a149ae7.mp3'
        },
    ]

    const plants = [
        { plant: plant01, name: plant01.nm, speed: 0.25 },
        { plant: plant02, name: plant02.nm, speed: 0.25 },
        { plant: plant06, name: plant06.nm, speed: 1 },
        { plant: plant04, name: plant04.nm, speed: 0.25 },
        { plant: plant07, name: plant07.nm, speed: 0.25 },
        { plant: plant09, name: plant09.nm, speed: 1 }
    ]

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        setCurrentTask(tasks.currentTask)
        setSelectedAudio(tasks.currentTask.audio);
        setCurrentPlant(tasks.currentTask.plant)
        setCurrentTimer(tasks.currentTask.timer)
        setCurrentTitle(tasks.currentTask.title)
        setCurrentDescription(tasks.currentTask.description)
    }, [])

    const handlePlantChange = (event) => {
        setCurrentPlant(plants.find((plant) => plant.name === event.target.value));
    };

    const handleIncreaseTime = () => {
        setCurrentTimer(currentTimer + 5);
    }

    const handleDecreaseTime = () => {
        setCurrentTimer(currentTimer - 5);
    }

    const handleTitleChange = (event) => {
        setCurrentTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setCurrentDescription(event.target.value);
    };

    const handleAudioChange = (event) => {
        setSelectedAudio(audios.find(audio => audio.value === event.target.value))
    }

    const onSubmit = (updatedCurrentTask) => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
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
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setCurrentTask({ ...currentTask, ...updatedCurrentTask });
    };

    return (
        <>
            <div className='h-full w-full overflow-y-auto bg-celeste'>
                <TaskDescriptionPage
                    currentTitle={currentTitle}
                    currentDescription={currentDescription}
                    handleTitleChange={handleTitleChange}
                    handleDescriptionChange={handleDescriptionChange}
                />
                <AudioSelector
                    audios={audios}
                    selectedAudio={selectedAudio}
                    handleAudioChange={handleAudioChange}
                />
                <TaskConfiguration
                    plants={plants}
                    // taskTitles={taskTitles}
                    currentTask={currentTask}
                    currentPlant={currentPlant}
                    currentTitle={currentTitle}
                    currentDescription={currentDescription}
                    currentTimer={currentTimer}
                    selectedAudio={selectedAudio}
                    handlePlantChange={handlePlantChange}
                    handleIncreaseTime={handleIncreaseTime}
                    handleDecreaseTime={handleDecreaseTime}
                    handleTitleChange={handleTitleChange}
                    onSubmit={onSubmit}
                />
            </div>
        </>
    )
}

export default NewTaskFormHandler