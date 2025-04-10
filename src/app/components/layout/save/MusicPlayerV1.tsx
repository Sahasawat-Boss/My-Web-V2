// Auto Play when clicking

'use client';

import { useEffect, useRef, useState } from 'react';
import { FaMusic } from "react-icons/fa";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const playOnInteraction = () => {
            if (audioRef.current) {
                audioRef.current.volume = 0.4; // set volume here (0.0 to 1.0)

                if (audioRef.current.paused) {
                    audioRef.current.play().then(() => {
                        setIsPlaying(true);
                    }).catch((err) => {
                        console.log("Autoplay blocked:", err);
                    });
                }
            }
            window.removeEventListener('click', playOnInteraction);
        };

        window.addEventListener('click', playOnInteraction);
        return () => window.removeEventListener('click', playOnInteraction);
    }, []);


    // Sync UI state with audio events
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} src="/audio/audio-bg.mp3" loop preload="auto" />
            <button
                onClick={() => {
                    if (!audioRef.current) return;
                    audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
                }}
                className="fixed top-3.5 left-3.5 p-1.5 text-sm bg-white/35 text-white rounded-full shadow z-[999] hover active:scale-70"
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                <FaMusic className={isPlaying ? 'floating-low' : 'opacity-25'} />
            </button>
        </>
    );
} 