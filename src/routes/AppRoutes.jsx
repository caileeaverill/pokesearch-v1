import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Main home page
import SearchResults from '../pages/SearchResults'; // Search results page
import PokemonDetail from '../pages/PokemonDetails'; // Pokémon detail page
import Nav from '../components/Nav/Nav'; // Your navigation component

export default function AppRoutes() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home route */}
                <Route path="/about" element={<Home />} /> {/* About route */}
                <Route path="/results" element={<SearchResults />} /> {/* Search results route */}
                <Route path="/pokemon/:name" element={<PokemonDetail />} /> {/* Pokémon detail route */}
            </Routes>
        </>
    );
}