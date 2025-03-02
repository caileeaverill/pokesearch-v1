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
        <div>
            <h1 className='text-3xl font-bold text-white capitalize mb-8'>{`#${pokemon.id} - ${pokemon.name}`}</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 text-white">
                <PokedexDataCard pokemon={pokemon} />
                <SpriteCard pokemon={pokemon} />
                <StatsCard pokemon={pokemon} />
            </div>
        </div>
    );
}