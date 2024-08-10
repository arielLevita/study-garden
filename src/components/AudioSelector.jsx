/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

const AudioSelector = ({ audios, selectedAudio, handleAudioChange }) => {

    const sectionTitle = 'Audio';

    const audioRef = useRef(null);
    const [selectedSource, setSelectedSource] = useState('');

    useEffect(() => {
        setSelectedSource(audios.find(audio => audio.value === selectedAudio?.value)?.source);
    }, [selectedAudio])
    
    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement && selectedSource == '') {
            audioElement.pause()
        }
        if (audioElement && selectedSource) {
            audioElement.src = selectedSource;
            audioElement.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }, [selectedSource]);

    if (!selectedAudio) {
        return <div>Loading...</div>;
    }

    return (
        <section id={sectionTitle} className='h-full'>
            <div className='h-full w-full bg-white'>
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
                                            <svg className="h-6 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z" /></svg>
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
                                        defaultChecked={audio.value === selectedAudio?.value}
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
            </div>
        </section>
    )
}

export default AudioSelector