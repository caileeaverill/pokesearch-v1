import { fetchData } from "./api";

const handleError = (error) => {
    console.error("Error fetching data:", error);
    throw error;
};

const fetchEndpointData = async (endpoint) => {
    try {
        // console.log(endpoint)
        const data = await fetchData(endpoint);
        return data;
    } catch (error) {
        handleError(error);
    }
};

export const fetchPokemonData = async (id) => {
    const endpoint = `pokemon/${id}`;
    return fetchEndpointData(endpoint);
};

export const fetchPokemonSpecies = async (id) => {
    const endpoint = `pokemon-species/${id}`;
    return fetchEndpointData(endpoint);
};

export const fetchGenderData = async (id) => {
    const speciesData = await fetchPokemonSpecies(id);
    const pokemonName = speciesData.name;
    const pokemonGenderRate = speciesData.gender_rate;

    const genderEndpoints = {
        isFemale: `gender/1`,
        isMale: `gender/2`,
        isGenderless: `gender/3`,
    };

    const genderResponses = await Promise.all(
        Object.values(genderEndpoints).map((endpoint) => fetchEndpointData(endpoint))
    );

    const genderData = Object.keys(genderEndpoints).reduce((acc, key, index) => {
        acc[key] = genderResponses[index].pokemon_species_details.some(
            (p) => p.pokemon_species.name === pokemonName
        );
        return acc;
    }, {});

    const maleCount = genderData.isMale ? 1 : 0;
    const femaleCount = genderData.isFemale ? 1 : 0;
    const genderlessCount = genderData.isGenderless ? 1 : 0;

    const totalCount = maleCount + femaleCount + genderlessCount;

    if (totalCount > 0) {
        const maleRatio = `${maleCount}:${femaleCount}`;
        const femaleRatio = `${femaleCount}:${maleCount}`;

        const malePercentage = Math.round((maleCount / totalCount) * 100);
        const femalePercentage = Math.round((femaleCount / totalCount) * 100);
        const genderlessPercentage = Math.round((genderlessCount / totalCount) * 100);

        genderData.pokemonGenderRate = {
            rate: pokemonGenderRate,
            maleRatio: maleRatio,
            femaleRatio: femaleRatio,
            malePercentage: `${malePercentage}% Male`,
            femalePercentage: `${femalePercentage}% Female`,
            genderlessPercentage: `${genderlessPercentage}% Genderless`
        };
    } else {
        genderData.pokemonGenderRate = {
            rate: pokemonGenderRate,
            maleRatio: "0:0",
            femaleRatio: "0:0",
            malePercentage: "0%",
            femalePercentage: "0%",
            genderlessPercentage: "100%"
        };
    }

    return genderData;
};

export const fetchGrowthRateData = async (id) => {
    const speciesData = await fetchPokemonSpecies(id);
    const growthRateName = speciesData.growth_rate.name;

    const endpoints = {
        'slow': 'growth-rate/1',
        'medium': 'growth-rate/2',
        'fast': 'growth-rate/3',
        'medium-slow': 'growth-rate/4',
        'slow-then-very-fast': 'growth-rate/5',
        'fast-then-very-slow': 'growth-rate/6'
    };

    let responseData = {};
    if (growthRateName in endpoints) {
        const endpoint = endpoints[growthRateName];
        responseData = await fetchEndpointData(endpoint);
    }
    return responseData;
};

export const fetchHabitatData = async (id) => {
    const speciesData = await fetchPokemonSpecies(id);
    const habitatEndpoint = speciesData.habitat.url.split('v2')[1]

    return fetchEndpointData(habitatEndpoint);
}
