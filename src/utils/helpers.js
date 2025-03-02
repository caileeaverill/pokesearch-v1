import { typeColor, typeColorAccents } from "../data/constants";

export const setPokemonTypeStyles = (pokemonType) => {
    return typeColor[pokemonType.toLowerCase()] || "#777"; // Default gray if type not found
};