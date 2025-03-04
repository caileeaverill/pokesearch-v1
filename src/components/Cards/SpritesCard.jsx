import React, { useState } from "react";
import { usePokemon } from "../../context/PokemonContext";

export default function SpriteCard({ className = "" }) {
    const { pokemon } = usePokemon();
    const [imageWidth, setImageWidth] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!pokemon) return null;

    const handleImageLoad = (e) => {
        setImageWidth(e.target.naturalWidth);
    };

    const chosenSprites = [
        {
            key: "Official Artwork",
            value: pokemon.sprites?.other?.["official-artwork"]?.front_default,
        },
        {
            key: "Regular",
            value: pokemon.sprites?.front_default,
        },
        {
            key: "Shiny",
            value: pokemon.sprites?.front_shiny,
        },
        {
            key: "Showdown",
            value: pokemon.sprites?.other?.showdown?.front_default,
        },
        {
            key: "Dream World",
            value: pokemon.sprites?.other?.dream_world?.front_default,
        },
        {
            key: "Home",
            value: pokemon.sprites?.other?.home?.front_default,
        },
    ];

    const validSprites = chosenSprites.filter((sprite) => sprite.value);
    const spriteKeys = validSprites.map((sprite) => sprite.key);
    const spriteValues = validSprites.map((sprite) => sprite.value);

    return (
        <div className={`bg-neutral-900 p-4 flex ${className}`}>
            <div className="flex flex-col justify-center gap-4 pr-16 mr-8 border-r border-neutral-800">
                {spriteKeys.map((key, index) => (
                    <button
                        key={index}
                        className={`relative opacity-70 hover:opacity-100 transition-all duration-300 ${index === selectedIndex ? "opacity-100" : ""
                            } w-auto`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <h6 className="text-left">{key}</h6>
                        {index === selectedIndex && (
                            <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full transition-all duration-300"></span>
                        )}
                    </button>
                ))}
            </div>
            <div className="relative m-auto h-[350px] w-[350px] flex items-center justify-center group overflow-hidden">
                {spriteValues.length > 0 ? (
                    <img
                        key={selectedIndex}
                        className={`transition-all duration-300 opacity-100 object-contain ${imageWidth < 200 ? "group-hover:scale-250" : ""
                            }`}
                        src={spriteValues[selectedIndex]}
                        alt={pokemon.name}
                        onLoad={handleImageLoad}
                    />
                ) : (
                    <p className="text-white">No sprites available</p>
                )}
            </div>
        </div>
    );
}