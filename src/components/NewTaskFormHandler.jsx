/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_KEY } from "../App";
import AudioSelector from '../pages/AudioSelector';
import TaskConfiguration from '../pages/TaskConfiguration';
import TaskDescriptionPage from '../pages/TaskDescriptionPage';

const NewTaskFormHandler = () => {

    const [selectedAudio, setSelectedAudio] = useState(null);
    const [currentTask, setCurrentTask] = useState(null)
    const [currentTimer, setCurrentTimer] = useState(0);
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentDescription, setCurrentDescription] = useState("");
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
            source: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3'
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

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        setCurrentTask(tasks.currentTask)
        setSelectedAudio(tasks.currentTask.audio);
        setCurrentTimer(tasks.currentTask.timer);
        setCurrentTitle(tasks.currentTask.title);
        setCurrentDescription(tasks.currentTask.description);
    }, [])

    const adjustTimerAmount = (minutes) => {
        setCurrentTimer(currentTimer + minutes);
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
            <div className='h-full w-full overflow-y-auto bg-celeste'>
                <Routes>
                    <Route path={'taskconfiguration'} element={
                        <TaskConfiguration
                            currentTask={currentTask}
                            currentTitle={currentTitle}
                            currentDescription={currentDescription}
                            currentTimer={currentTimer}
                            selectedAudio={selectedAudio}
                            adjustTimerAmount={adjustTimerAmount}
                            handleTitleChange={handleTitleChange}
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