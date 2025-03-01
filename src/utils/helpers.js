import { typeColor, typeColorAccents } from "../data/constants";

export const setPokemonCardStyles = (pokemonType, pokemonCardElement) => {
    const typeColorValue = typeColor[pokemonType.toLowerCase()];
    const typeColorAccentValue = typeColorAccents[pokemonType.toLowerCase()];

    pokemonCardElement.style.background = `linear-gradient(324deg, ${typeColorAccentValue} 0%, ${typeColorValue} 25%, ${typeColorValue} 75%, ${typeColorAccentValue} 100%)`;
};
