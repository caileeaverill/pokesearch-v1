import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(data => setPokemon(data));
    }, [name]);

    if (!pokemon) return <p className="text-white">Loading...</p>;

    console.log('hello')

    return (
        <div className="text-white p-6">
            <h1 className="capitalize text-3xl mb-4">{pokemon.name}</h1>
            <p>{`#${pokemon.id}`}</p>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        </div>
    );
}