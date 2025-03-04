import React, { useState, useRef } from 'react';
import { PiSpeakerSimpleHigh } from "react-icons/pi";
import { usePokemon } from "../../context/PokemonContext";

export default function CryCard({ className = "" }) {
    const { pokemon } = usePokemon();
    const cryUrl = pokemon.cries.latest;
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);  // Set playing state to true when audio starts
        }
    };

    const handleAudioEnd = () => {
        setIsPlaying(false);  // Reset opacity once the audio ends
    };

    return (
        <div className={`bg-neutral-900 p-4 flex justify-around items-center gap-4 ${className}`}>
            <h6>Click to hear cry</h6>
            <div
                onClick={handlePlay}
                className={`cursor-pointer text-3xl transition-opacity duration-300 ${isPlaying || "opacity-30"} hover:opacity-100`}
            >
                <PiSpeakerSimpleHigh />
            </div>
            {cryUrl && (
                <audio
                    ref={audioRef}
                    id="pokemonCry"
                    src={cryUrl}
                    preload="auto"
                    onEnded={handleAudioEnd}  // Listen for the end event
                />
            )}
        </div>
    );
}