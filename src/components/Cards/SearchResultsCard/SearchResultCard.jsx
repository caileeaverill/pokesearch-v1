import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchResultCard({ pokemon }) {

    console.log(pokemon)

    return (
        <Link to={`/pokemon/${pokemon.name}`} className="relative flex flex-col bg-neutral-900 text-white p-6 flex-1/4 grow-0 group transition-all duration-300 hover:scale-105">
            <p className="transition-all duration-300 group-hover:text-white">{`#${pokemon.id}`}</p>
            <h6 className="capitalize mb-4 transition-all duration-300 group-hover:text-white">{pokemon.name}</h6>
            <img
                className="mt-auto transition-all duration-300 group-hover:blur-sm"
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <p className="text-white font-semibold text-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">View Details</p>
            </div>
        </Link>
    )
}
