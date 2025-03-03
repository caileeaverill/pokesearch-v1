import { createContext, useContext } from "react";

const PokemonContext = createContext(null);

export const PokemonProvider = ({ pokemonData, speciesData, children }) => {
    return (
        <PokemonContext.Provider value={{ pokemon: pokemonData, species: speciesData }}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemon must be used within a PokemonProvider");
    }
    return context;
};