export const typeColor = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};

export const typeColorAccents = {
    normal: "#7c7b59",
    fire: "#b15e21",
    water: "#476ab2",
    electric: "#b79a1e",
    grass: "#599336",
    ice: "#6ea19e",
    fighting: "#8f1f1b",
    poison: "#782b76",
    ground: "#a88d49",
    flying: "#7c69b4",
    psychic: "#b93d63",
    bug: "#7a8910",
    rock: "#867625",
    ghost: "#543e6f",
    dragon: "#5125bb",
    dark: "#513e32",
    steel: "#878798",
    fairy: "#9e617f"
};

export const typeChart = {
    normal: {
        strongAgainst: [],
        weakAgainst: ["Rock", "Steel", "Fighting"],
        resistantTo: ["Ghost"],
        vulnerableTo: ["Fighting"],
    },
    fighting: {
        strongAgainst: ["Normal", "Rock", "Steel", "Ice", "Dark"],
        weakAgainst: ["Flying", "Poison", "Psychic", "Bug", "Ghost", "Fairy"],
        resistantTo: ["Rock", "Bug", "Dark"],
        vulnerableTo: ["Flying", "Psychic", "Fairy"],
    },
    flying: {
        strongAgainst: ["Fighting", "Bug", "Grass"],
        weakAgainst: ["Rock", "Steel", "Electric"],
        resistantTo: ["Fighting", "Ground", "Bug", "Grass"],
        vulnerableTo: ["Rock", "Electric", "Ice"],
    },
    poison: {
        strongAgainst: ["Grass", "Fairy"],
        weakAgainst: ["Poison", "Ground", "Rock", "Ghost", "Steel"],
        resistantTo: ["Fighting", "Poison", "Grass", "Fairy"],
        vulnerableTo: ["Ground", "Psychic"],
    },
    ground: {
        strongAgainst: ["Poison", "Rock", "Steel", "Fire", "Electric"],
        weakAgainst: ["Flying", "Bug", "Grass"],
        resistantTo: ["Poison", "Rock", "Electric"],
        vulnerableTo: ["Water", "Grass", "Ice"],
    },
    rock: {
        strongAgainst: ["Flying", "Bug", "Fire", "Ice"],
        weakAgainst: ["Fighting", "Ground", "Steel"],
        resistantTo: ["Normal", "Flying", "Poison", "Fire"],
        vulnerableTo: ["Fighting", "Ground", "Steel", "Water", "Grass"],
    },
    bug: {
        strongAgainst: ["Grass", "Psychic", "Dark"],
        weakAgainst: ["Fighting", "Flying", "Poison", "Ghost", "Steel", "Fire", "Fairy"],
        resistantTo: ["Fighting", "Ground", "Grass"],
        vulnerableTo: ["Flying", "Rock", "Fire"],
    },
    ghost: {
        strongAgainst: ["Ghost", "Psychic"],
        weakAgainst: ["Normal", "Dark", "Ghost"],
        resistantTo: ["Normal", "Fighting", "Poison", "Bug"],
        vulnerableTo: ["Ghost", "Dark"],
    },
    steel: {
        strongAgainst: ["Rock", "Ice", "Fairy"],
        weakAgainst: ["Steel", "Fire", "Water", "Electric"],
        resistantTo: [
            "Normal", "Flying", "Poison", "Rock", "Bug", "Steel", "Grass", "Psychic", "Ice", "Dragon", "Fairy",
        ],
        vulnerableTo: ["Fighting", "Ground", "Fire"],
    },
    fire: {
        strongAgainst: ["Bug", "Steel", "Grass", "Ice"],
        weakAgainst: ["Rock", "Fire", "Water", "Dragon"],
        resistantTo: ["Bug", "Fire", "Grass", "Steel", "Ice", "Fairy"],
        vulnerableTo: ["Ground", "Rock", "Water"],
    },
    water: {
        strongAgainst: ["Ground", "Rock", "Fire", "Electric"],
        weakAgainst: ["Water", "Grass", "Dragon"],
        resistantTo: ["Steel", "Fire", "Water", "Ice"],
        vulnerableTo: ["Grass", "Electric"],
    },
    grass: {
        strongAgainst: ["Ground", "Rock", "Water"],
        weakAgainst: ["Flying", "Poison", "Bug", "Steel", "Fire", "Grass", "Dragon"],
        resistantTo: ["Ground", "Water", "Grass", "Electric"],
        vulnerableTo: ["Flying", "Poison", "Bug", "Fire", "Ice"],
    },
    electric: {
        strongAgainst: ["Flying", "Water"],
        weakAgainst: ["Ground", "Grass", "Electric", "Dragon"],
        resistantTo: ["Flying", "Steel", "Electric"],
        vulnerableTo: ["Ground"],
    },
    psychic: {
        strongAgainst: ["Fighting", "Poison"],
        weakAgainst: ["Steel", "Psychic", "Dark"],
        resistantTo: ["Fighting", "Psychic"],
        vulnerableTo: ["Bug", "Ghost", "Dark", "Psychic"],
    },
    ice: {
        strongAgainst: ["Flying", "Ground", "Grass", "Dragon"],
        weakAgainst: ["Steel", "Fire", "Water", "Ice"],
        resistantTo: ["Ice"],
        vulnerableTo: ["Fighting", "Rock", "Steel", "Fire"],
    },
    dragon: {
        strongAgainst: ["Dragon"],
        weakAgainst: ["Steel", "Fairy"],
        resistantTo: ["Fire", "Water", "Grass", "Electric"],
        vulnerableTo: ["Ice", "Dragon", "Fairy"],
    },
    dark: {
        strongAgainst: ["Ghost", "Psychic"],
        weakAgainst: ["Fighting", "Dark", "Fairy"],
        resistantTo: ["Ghost", "Psychic", "Dark"],
        vulnerableTo: ["Fighting", "Bug", "Fairy"],
    },
    fairy: {
        strongAgainst: ["Fighting", "Dragon", "Dark"],
        weakAgainst: ["Poison", "Steel", "Fire"],
        resistantTo: ["Fighting", "Bug", "Dragon", "Dark"],
        vulnerableTo: ["Poison", "Steel"],
    }
};

export const gameVersionColors = {
    red: "#DA3914",
    blue: "#2E50D8",
    green: "#24A724",
    yellow: "",
    gold: "",
    silver: "",
    crystal: "",
    ruby: "",
    sapphire: "",
    emerald: "",
    firered: "",
    leafgreen: "",
    diamond: "",
    pearl: "",
    platinum: "",
    heartgold: "",
    soulsilver: "",
    black: "",
    white: "",
    black2: "",
    white2: "",
    x: "",
    y: "",
    omegaruby: "",
    alphasapphire: "",
    sun: "",
    moon: "",
    ultrasun: "",
    ultramoon: "",
    sword: "",
    shield: ""
};

