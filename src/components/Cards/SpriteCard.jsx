import React, { useState } from 'react';

export default function SpriteCard({ pokemon }) {
    const [imageWidth, setImageWidth] = useState(null);

    const handleImageLoad = (event) => {
        setImageWidth(event.target.naturalWidth); // Capture the image's natural width
    };

    const chosenSprites = [
        {
            key: "Default",
            value: pokemon.sprites.front_default
        },
        {
            key: "Shiny",
            value: pokemon.sprites.front_shiny
        },
        {
            key: "Dream World",
            value: pokemon.sprites.other.dream_world.front_default
        },
        {
            key: "Home",
            value: pokemon.sprites.other.home.front_default
        },
        {
            key: "Official Artwork",
            value: pokemon.sprites.other['official-artwork'].front_default
        },
        {
            key: "Showdown",
            value: pokemon.sprites.other.showdown.front_default
        }
    ];

    const chosenSpritesKeys = chosenSprites.map((sprite) => sprite.key);
    const pokemonSprites = chosenSprites.filter((sprite) => sprite.value !== null).map((sprite) => sprite.value);

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className='bg-neutral-900 p-4 flex'>
            <div className='flex flex-col justify-center gap-4 pr-8 mr-8 border-r-1 border-neutral-800'>
                {chosenSpritesKeys.map((key, index) => (
                    <div className="flex flex-col items-start">
                        <button
                            key={index}
                            className={`relative opacity-70 hover:opacity-100 transition-all duration-300 ${index === selectedIndex ? "opacity-100" : ""} w-auto`}
                            onClick={() => setSelectedIndex(index)}
                        >
                            <span className="text-left">{key}</span>
                            {index === selectedIndex && (
                                <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full transition-all duration-300"></span>
                            )}
                        </button>
                    </div>
                ))}
            </div>
            <div className="relative m-auto h-[250px] w-[250px] flex items-center justify-center group">
                <img
                    key={selectedIndex}
                    className={`transition-all duration-300 opacity-100 object-contain ${imageWidth < 250 ? "group-hover:scale-200" : ""}`}
                    src={pokemonSprites[selectedIndex]}
                    alt={pokemon.name}
                    onLoad={handleImageLoad} // Set the image size when loaded
                />
            </div>
        </div>
    );
}