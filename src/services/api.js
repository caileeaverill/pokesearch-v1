const baseURL = "https://pokeapi.co/api/v2/";

export const fetchData = async (endpoint) => {
    try {
        const res = await fetch(`${baseURL}${endpoint}`);
        if (!res.ok) {
            throw new Error("Failed to fetch pokemon data");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        throw error; // Propagate the error to handle it in the component
    }
}