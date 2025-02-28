import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
