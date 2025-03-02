import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokedexDataCard from '../components/Cards/PokedexDataCard';
import SpriteCard from '../components/Cards/SpriteCard';

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
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-white">
            <PokedexDataCard pokemon={pokemon} />
            <SpriteCard pokemon={pokemon} />
        </div>
    );
}