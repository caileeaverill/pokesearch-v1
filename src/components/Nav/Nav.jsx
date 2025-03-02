import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center bg-neutral-900 p-4 absolute top-0 left-0 right-0">
            <h2 className="text-white text-2xl font-bold">
                <Link to="/">PokéSearch</Link>
            </h2>
            <div className="flex gap-6">
                <Link to="/" className="text-white hover:underline">Home</Link>
                <Link to="/results" className="text-white hover:underline">Results</Link>
                <Link to="/about" className="text-white hover:underline">About</Link>
            </div>
        </nav>
    );
}