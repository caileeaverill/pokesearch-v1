import React from 'react'
import { useState, useEffect } from "react";
import { fetchPokemonData, fetchPokemonSpecies } from '../services/fetch';
import Loader from '../components/Loader/Loader';
import SearchResultCard from '../components/Cards/SearchResultCard';

export default function SearchResults() {
    {
        const [pokemonData, setPokemonData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
        const [loadedCount, setLoadedCount] = useState(0);

        const numOfCards = 15;

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

        return (
            <div className="flex gap-4 flex-wrap justify-center pt-8">
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
