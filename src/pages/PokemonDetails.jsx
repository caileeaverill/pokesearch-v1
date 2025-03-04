import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonProvider } from "../context/PokemonContext";
import { fetchEndpointData } from "../services/fetch";
import Loader from "../components/Loader/Loader";
import TypeCard from "../components/Cards/TypeCard";
import SpritesCard from "../components/Cards/SpritesCard";
import StatsCard from "../components/Cards/StatsCard";
import CryCard from "../components/Cards/CryCard";
import PhysicalAttributesCard from "../components/Cards/PhysicalAttributesCard";

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

    return (
        <PokemonProvider pokemonData={pokemon} speciesData={species}>
            <h1 className="text-2xl font-bold text-white capitalize mb-4">
                {`#${pokemon.id} - ${pokemon.name}`}
            </h1>
            <div className="grid gap-4">

                <div className="grid gap-4 text-white grid-cols-1 md:grid-cols-2">
                    <SpritesCard className="col-span-1" />
                    <div>
                        <PhysicalAttributesCard className="col-span-1 md:col-span-1" />
                        <CryCard className="col-span-1 md:col-span-2" />
                    </div>
                </div>

                <div className="grid gap-4 text-white grid-cols-3 lg:grid-cols-2">
                    <StatsCard className="col-span-1" />
                    <TypeCard className="col-span-1 lg:col-span-1" />
                </div>
            </div>
        </PokemonProvider>
    );
}