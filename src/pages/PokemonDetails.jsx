import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonProvider } from "../context/PokemonContext"; // Import the context provider

import PokedexDataCard from "../components/Cards/PokedexDataCard";
import SpritesCard from "../components/Cards/SpritesCard";
import StatsCard from "../components/Cards/StatsCard";
import GameAppearancesCard from "../components/Cards/GameApperancesCard";
import PhysicalAttributesCard from "../components/Cards/PhysicalAttributesCard";

export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => response.json())
            .then((data) => setPokemon(data));
    }, [name]);

    if (!pokemon) return <p className="text-white">Loading...</p>;

    return (
        <PokemonProvider pokemon={pokemon}>
            <h1 className="text-3xl font-bold text-white capitalize mb-8">
                {`#${pokemon.id} - ${pokemon.name}`}
            </h1>

            <div className="grid gap-4 text-white md:grid-cols-4 auto-rows-auto">
                {/* Row 1: Pokedex (25%) & Sprites (75%) */}
                <SpritesCard className="col-span-4 md:col-span-2" />
                <StatsCard className="col-span-4 md:col-span-2" />

                {/* Row 2: Stats (33%), Game Appearances (33%) Physical Attributes (33%) */}
                <PokedexDataCard className="col-span-4 md:col-span-1" />
                <GameAppearancesCard className="col-span-4 md:col-span-1" />
                <PhysicalAttributesCard className="col-span-4 md:col-span-1" />
            </div>
        </PokemonProvider>
    );
}