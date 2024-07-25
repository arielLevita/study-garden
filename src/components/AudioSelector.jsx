import { useEffect, useRef, useState } from "react";

const AudioSelector = () => {
    
    const audioRef = useRef(null);
    const [selectedAudio, setSelectedAudio] = useState(null);
    const [selectedSource, setSelectedSource] = useState('');
    
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
            // source: 'https://cdn.pixabay.com/audio/2024/01/15/audio_9914e58808.mp3'
            source: ''
        },
        {
            id: 'pianoMelody',
            name: 'pianoMelody',
            value: 'pianoMelody',
            label: 'Melodía de piano',
            source: ''
        },
        {
            id: 'guitarMelody',
            name: 'guitarMelody',
            value: 'guitarMelody',
            label: 'Melodía de guitarra',
            source: ''
        },
        {
            id: 'rainSound',
            name: 'rainSound',
            value: 'rainSound',
            label: 'Sonido de lluvia',
            source: 'https://cdn.pixabay.com/download/audio/2024/05/21/audio_08ef8717b4.mp3'
            // source: ''
        },
        {
            id: 'waveSound',
            name: 'waveSound',
            value: 'waveSound',
            label: 'Sonido de olas',
            source: ''
        },
    ]

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement && selectedSource) {
            audioElement.src = selectedSource;
            audioElement.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }, [selectedSource]);

    const handleAudioChange = (event) => {
        setSelectedAudio(audios.find(audio => audio.value === event.target.value));
        console.log(selectedAudio)
        const selectedAudioSource = audios.find(audio => audio.value === event.target.value)?.source;
        setSelectedSource(selectedAudioSource);
    };

    return (
        <>
            <div className="grid gap-4 p-4">
                {
                    audios?.map((audio, index) => (
                        <div key={audio.name}>
                            <label
                                className="w-full flex justify-between bg-celeste has-[:checked]:bg-azul text-black has-[:checked]:text-white fill-black has-[:checked]:fill-white py-2 px-4"
                                htmlFor={audio.id}
                            >
                                <span className="flex items-center text-lg">
                                    {index !== 0 && (
                                        <svg className="h-6 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" /></svg>
                                    )}
                                    {index === 0 && (
                                        <svg className="h-6 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z"/></svg>
                                    )}
                                    {audio.label}
                                </span>
                                <input
                                    className="
                                            w-5
                                            aspect-square
                                            content-center 
                                            before:block 
                                            before:[content:''] 
                                            before:w-full 
                                            before:aspect-square 
                                            before:rounded-full 
                                            before:bg-celeste
                                            before:border-2
                                            before:border-naranja
                                            checked:before:bg-naranja
                                            checked:before:bg-[url('check.svg')]
                                            checked:before:bg-no-repeat
                                            checked:before:bg-center
                                            checked:before:fill-azul"
                                    type="radio"
                                    name="audio"
                                    id={audio.id}
                                    value={audio.value}
                                    onChange={handleAudioChange}
                                    defaultChecked={index === 0}
                                />
                            </label>
                        </div>
                    ))
                }
            </div>

            <audio
                ref={audioRef}
                preload="auto"
                crossOrigin="anonymous"
                loop
            />
        </>
    )
}

export default AudioSelector