import { typeColor, typeChart } from "../data/constants";
import { GiBiceps, GiBrokenBone, GiShieldImpact, GiBrokenShield } from "react-icons/gi";

export const setPokemonTypeStyles = (pokemonType) => {
    return typeColor[pokemonType.toLowerCase()] || "#777"; // Default gray if type not found
};

export const checkTypeRelationships = (types) => {
    const relationships = {
        strongAgainst: [],
        weakAgainst: [],
        resistantTo: [],
        vulnerableTo: [],
    };

    types.forEach((type) => {
        const typeInfo = typeChart[type];

        if (typeInfo) {
            relationships.strongAgainst.push(...typeInfo.strongAgainst);
            relationships.weakAgainst.push(...typeInfo.weakAgainst);
            relationships.resistantTo.push(...typeInfo.resistantTo);
            relationships.vulnerableTo.push(...typeInfo.vulnerableTo);
        }
    });

    relationships.strongAgainst = [...new Set(relationships.strongAgainst)];
    relationships.weakAgainst = [...new Set(relationships.weakAgainst)];
    relationships.resistantTo = [...new Set(relationships.resistantTo)];
    relationships.vulnerableTo = [...new Set(relationships.vulnerableTo)];

    return relationships;
};

export const getRelationshipIcon = (category) => {
    switch (category) {
        case "strongAgainst":
            return GiBiceps;
        case "weakAgainst":
            return GiBrokenBone;
        case "resistantTo":
            return GiShieldImpact;
        case "vulnerableTo":
            return GiBrokenShield;
        default:
            return GiBiceps;
    }
};