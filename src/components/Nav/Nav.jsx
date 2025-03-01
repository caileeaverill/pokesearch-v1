import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="flex justify-between items-center bg-neutral-900 px-6 py-4 absolute top-0 left-0 right-0">
            <h2 className="text-white text-2xl font-bold">PokéSearch</h2>
            <div className="flex gap-4">
                <Link to="/" className="text-white hover:underline">Home</Link>
                <Link to="/about" className="text-white hover:underline">About</Link>
                <Link to="/results" className="text-white hover:underline">Results</Link>
            </div>
        </nav>
    );
}