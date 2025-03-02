import React from 'react'
import { useState, useEffect } from "react";
import { fetchPokemonData, fetchPokemonSpecies } from '../services/fetch';
import { setPokemonCardStyles } from "../utils/helpers"
import Loader from '../components/Loader/Loader';
import SearchResultCard from '../components/Cards/SearchResultsCard/SearchResultCard';

export default function SearchResults() {
    {
        const [pokemonData, setPokemonData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
        const [loadedCount, setLoadedCount] = useState(0);

        const numOfCards = 100;

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const startingIdIndex = 1;
                    const combinedData = [];

                    for (let i = 0; i < numOfCards; i++) {
                        const pokemonId = startingIdIndex + i;

                        const pokemonData = await fetchPokemonData(pokemonId);
                        const speciesData = await fetchPokemonSpecies(pokemonId);

                        combinedData.push({
                            pokemon: pokemonData,
                            species: speciesData,
                        });

                        setLoadedCount(i + 1);
                    }

                    setPokemonData((prevData) => [...prevData, ...combinedData]);
                    setIsLoading(false);
                } catch (error) {
                    setError(error);
                    setIsLoading(false);
                }
            };

            fetchData();
        }, []);

        useEffect(() => {
            const applyTypeStyling = () => {
                pokemonData.forEach((pokemon) => {
                    if (pokemon.pokemon.types.length > 0) {
                        const type = pokemon.pokemon.types[0].type.name;
                        const pokemonCardElements = document.querySelectorAll(
                            `.pokemon__grid_card.${type}`
                        );
                        pokemonCardElements.forEach((element) => {
                            setPokemonCardStyles(type, element);
                        });
                    }
                });
            };

            applyTypeStyling();
        }, [pokemonData]);

        return (
            <div className="flex gap-4 flex-wrap justify-center mt-24">
                {isLoading ? (
                    <Loader loadedCount={loadedCount} totalCount={numOfCards} />
                ) : (
                    pokemonData.map((pokemon, index) => (
                        <SearchResultCard
                            key={index}
                            pokemon={pokemon.pokemon}
                            species={pokemon.species}
                        />
                    ))
                )}
            </div>
        );
    }
}
