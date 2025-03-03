import { createContext, useContext } from "react";

const PokemonContext = createContext(null); // Ensure default value is null to avoid errors

export const PokemonProvider = ({ pokemon, children }) => {
    return (
        <PokemonContext.Provider value={pokemon}>
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