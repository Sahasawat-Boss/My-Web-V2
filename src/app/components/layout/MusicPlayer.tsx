'use client';

import { useRef, useState, useEffect } from 'react';
import { FaMusic } from "react-icons/fa";

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    // Sync UI with audio events
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);

        audio.volume = 0.4; // Set default volume

        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);

        return () => {
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
        };
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (audioRef.current.paused) {
            audioRef.current.play().catch((err) => {
                console.log("Play failed:", err);
            });
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <>
            <audio ref={audioRef} src="/audio/audio-bg.mp3" loop preload="auto" />
            <button
                onClick={toggleAudio}
                className="fixed top-3.5 left-3.5 p-1.5 text-sm bg-white/35 text-white rounded-full shadow z-[999] hover active:scale-70"
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                <FaMusic className={isPlaying ? 'floating-low' : 'opacity-25'} />
            </button>
        </>
    );
}
