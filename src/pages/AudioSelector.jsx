/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";
import Lottie from 'lottie-react';
import plant06 from '../assets/AnimatedPlants/plant06-animation.json';

const AudioSelector = ({ audios, selectedAudio, handleAudioChange }) => {

    const audioRef = useRef(null);
    const lottieRef = useRef();
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
        <section className='h-full bg-white'>
            <AnimatedPage>
                <div className='h-full w-full'>
                    <div className='max-w-md h-full mx-auto'>
                        <div className="flex flex-col justify-between h-full">
                            <div className="grid gap-4 p-4">
                                {
                                    audios?.map((audio, index) => (
                                        <div key={audio.name}>
                                            <label
                                                className="group w-full flex justify-between items-center bg-celeste has-[:checked]:bg-azul text-black has-[:checked]:text-white fill-black has-[:checked]:fill-white rounded-lg py-2 px-4"
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
                                                <div className='hidden group-has-[:checked]:block w-6 h-6 bg-naranja rounded-full mr-2'>
                                                    <svg className='w-6 aspect-square fill-white z-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                                                </div>
                                                <input
                                                    className="hidden"
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
                            <div className="my-8">
                                <Lottie
                                    className='w-36 mx-auto'
                                    lottieRef={lottieRef}
                                    animationData={plant06}
                                    loop={true}
                                    speed={1}
                                />
                            </div>
                        </div>

                        <audio
                            ref={audioRef}
                            preload="auto"
                            crossOrigin="anonymous"
                            loop
                        />
                    </div>
                </div>
            </AnimatedPage>
        </section>
    )
}

export default AudioSelector