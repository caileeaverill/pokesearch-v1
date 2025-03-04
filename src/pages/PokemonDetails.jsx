import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonProvider } from "../context/PokemonContext";
import { fetchEndpointData } from "../services/fetch";
import Loader from "../components/Loader/Loader";

import GameAppearanceCard from "../components/Cards/GameAppearanceCard"
import TypeCard from "../components/Cards/TypeCard";
import SpritesCard from "../components/Cards/SpritesCard";
import StatsCard from "../components/Cards/StatsCard";
import CryCard from "../components/Cards/CryCard";
import PhysicalAttributesCard from "../components/Cards/PhysicalAttributesCard";

import { GiBabyBottle, GiUnicorn, GiCrown } from "react-icons/gi";

export default function PokemonDetail() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);

    useEffect(() => {
        const fetchPokemonDataAndSpecies = async () => {
            try {
                // Fetch Pokémon data and species data in parallel
                const [pokemonData, speciesData] = await Promise.all([
                    fetchEndpointData(`pokemon/${name}`),
                    fetchEndpointData(`pokemon-species/${name}`)
                ]);

                setPokemon(pokemonData);
                setSpecies(speciesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPokemonDataAndSpecies();
    }, [name]);

    if (!pokemon || !species) return <Loader />;

    let icon = null;
    let toolTipText = null;

    if (species.is_legendary) {
        icon = <GiCrown />;
        toolTipText = "Legendary";
    } else if (species.is_mythical) {
        icon = <GiUnicorn />
        toolTipText = "Mythical";
    } else if (species.is_baby) {
        icon = <GiBabyBottle />
        toolTipText = "Baby";
    }

    const englishFlavorTexts = species.flavor_text_entries
        .filter(entry => entry.language.name === 'en')
        .map(entry => entry.flavor_text);

    return (
        <PokemonProvider pokemonData={pokemon} speciesData={species}>
            <div className="flex items-center gap-4 text-white my-6">
                <div className="relative group">
                    <span className="text-4xl">{icon}</span>
                    <span className="absolute left-1/2 top-full mb-2 -translate-x-1/2 bg-zinc-700 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">{toolTipText}</span>
                </div>
                <h1 className="text-2xl font-bold text-white capitalize">
                    {`#${pokemon.name}`}
                </h1>
                {/* get the first flavor text in english only */}
                <span>
                    {
                        // englishFlavorTexts
                    }
                </span>
            </div>
            <div className="grid gap-4">

                <div className="grid gap-4 text-white grid-cols-1 md:grid-cols-2">
                    <SpritesCard className="col-span-1" />
                    <GameAppearanceCard className="col-span-1" />
                </div>

                <div className="grid gap-4 text-white grid-cols-1 lg:grid-cols-4">
                    <StatsCard className="col-span-1" />
                    <TypeCard className="col-span-2" />
                    <div className="flex flex-col gap-4">
                        <PhysicalAttributesCard className="col-span-1" />
                        <CryCard className="col-span-1 md:col-span-2" />
                    </div>
                </div>
            </div>
        </PokemonProvider>
    );
}