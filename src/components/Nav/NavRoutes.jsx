import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../../pages/Home'
import Nav from '../Nav/Nav'
import SearchResults from '../../pages/SearchResults'

export default function MainNav() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/results" element={<SearchResults />} />
            </Routes>
        </>
    );
}