import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokedexDataCard from '../components/Cards/PokedexDataCard';
import SpriteCard from '../components/Cards/SpriteCard';
import StatsCard from '../components/Cards/StatsCard';

export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, [name]);

    if (!pokemon) return <p className="text-white">Loading...</p>;

    return (
        <>
            <h1 className='text-3xl font-bold text-white capitalize mb-8'>{`#${pokemon.id} - ${pokemon.name}`}</h1>
            <div className="grid grid-cols-3 gap-4 text-white md:grid-cols-[1.5fr_1.5fr] lg:grid-cols-[1.5fr_1.5fr_2fr_1fr]">
                <PokedexDataCard pokemon={pokemon} className="col-span-3 md:col-span-1 lg:col-span-1" />
                <StatsCard pokemon={pokemon} className="col-span-3 md:col-span-1 lg:col-span-1" />
                <SpriteCard pokemon={pokemon} className="col-span-3 lg:col-span-2" />
                <SpriteCard pokemon={pokemon} className="col-span-3 lg:col-span-1" />
            </div>
        </>
    );
}