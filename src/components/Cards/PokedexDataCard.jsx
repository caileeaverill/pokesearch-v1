import React from 'react'
import { setPokemonTypeStyles } from '../../utils/helpers'

export default function PokedexDataCard({ pokemon, className = "" }) {

    console.log(pokemon)


    return (
        <div className={`bg-neutral-900 p-4 ${className}`}>
            <div className='flex items-center justify-between'>
                <div className="flex gap-2">
                    {pokemon.types.map((type, index) => {
                        const bgColor = setPokemonTypeStyles(type.type.name);
                        return (
                            <div key={index} className="relative group">
                                {/* Circle */}
                                <div
                                    className="w-8 h-8 rounded-full transition-transform duration-300 group-hover:scale-110 flex items-center justify-center"
                                    style={{ backgroundColor: bgColor }}
                                ></div>

                                {/* Hover Effect (Text Appears) */}
                                <span className="capitalize absolute left-1/2 top-full mt-1 -translate-x-1/2 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    {type.type.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
