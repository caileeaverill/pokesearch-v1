import React, { useState, useEffect } from "react";
import { usePokemon } from "../../context/PokemonContext";

export default function StatsCard({ className = "" }) {

    const { pokemon } = usePokemon();

    const colorClass = {
        hp: "bg-[#69DC12]",
        attack: "bg-[#EFCC18]",
        defense: "bg-[#E86412]",
        special_attack: "bg-[#14C3F1]",
        special_defense: "bg-[#4A6ADF]",
        speed: "bg-[#D51DAD]",
    };

    const [animatedStats, setAnimatedStats] = useState(
        pokemon.stats.map(() => 0)
    );

    useEffect(() => {
        const statPercentages = pokemon.stats.map(
            (stat) => (stat.base_stat / 255) * 100
        );

        const intervalDuration = 20;
        const incrementPerStep = 2;

        const interval = setInterval(() => {
            setAnimatedStats((prevStats) => {
                return prevStats.map((width, index) => {
                    const targetWidth = statPercentages[index];
                    if (width < targetWidth) {
                        return Math.min(width + incrementPerStep, targetWidth);
                    }
                    return width;
                });
            });
        }, intervalDuration);

        setTimeout(() => {
            clearInterval(interval);
        }, 300);

        return () => clearInterval(interval);
    }, [pokemon.stats]);

    if (!pokemon) return null;

    return (
        <div className={`bg-neutral-900 p-4 ${className}`}>
            <div className="flex flex-col gap-4 items-center">
                {pokemon.stats.map((stat, index) => {
                    const statType = stat.stat.name.toLowerCase().replace(/-/g, "_");
                    const statColor = colorClass[statType] || "bg-gray-400";
                    const animatedWidth = animatedStats[index];

                    return (
                        <div key={index} className="w-full flex flex-col gap-1">
                            <h6 className="uppercase">
                                {stat.stat.name.replace(/-/g, " ").replace(/Special/gi, "Sp.")}
                            </h6>
                            <div className="flex w-full items-center gap-2">
                                <div className="relative flex-1 h-4 bg-neutral-700 rounded-full">
                                    <div
                                        className={`h-full rounded-full text-xs text-white font-bold text-right px-2 transition-all duration-2000 ease-in-out ${statColor}`}
                                        style={{ width: `${animatedWidth}%` }}
                                    >
                                    </div>
                                </div>
                                <p className="w-12 text-center">{stat.base_stat}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}