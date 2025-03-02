import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResultCard from './SearchResultCard';
import PokemonDetail from './PokemonDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:name" element={<PokemonDetail />} />
            </Routes>
        </Router>
    );
}

export default App;