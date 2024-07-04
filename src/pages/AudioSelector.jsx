import { useEffect, useRef, useState } from "react";

const AudioSelector = () => {

    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [selectedAudio, setSelectedAudio] = useState('');

    const audios = [
        {
            id: 'music',
            value: 'musicLoFi',
            label: 'Música Lo-Fi',
            source: 'https://cdn.pixabay.com/audio/2024/01/15/audio_9914e58808.mp3'
        },
        {
            id: 'rainSound',
            value: 'rainSound',
            label: 'Sonido de lluvia',
            source: 'https://cdn.pixabay.com/download/audio/2024/05/21/audio_08ef8717b4.mp3'
        }
    ]

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement && selectedAudio) {
            audioElement.src = selectedAudio;
            audioElement.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }, [selectedAudio]);

    const handleAudioChange = (event) => {
        const selectedSource = audios.find(audio => audio.value === event.target.value)?.source;
        setSelectedAudio(selectedSource);
    };

    const toggleMute = () => {
        const audioElement = audioRef.current;
        if (audioElement) {
            audioElement.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <div>
                {
                    audios?.map((audio) => (
                        <div key={audio.id}>
                            <input
                                type="radio"
                                name="audio"
                                id={audio.id}
                                value={audio.value}
                                onChange={handleAudioChange}
                            />
                            <label htmlFor={audio.id}>{audio.label}</label>
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

            <button onClick={toggleMute}>
                {isMuted ? "Unmute" : "Mute"}
            </button>
        </>
    )
}

export default AudioSelector