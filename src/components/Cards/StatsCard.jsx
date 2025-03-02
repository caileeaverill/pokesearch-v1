import React, { useState, useEffect } from 'react';

export default function StatsCard({ pokemon }) {
    const colorClass = {
        hp: 'bg-[#69DC12]',
        attack: 'bg-[#EFCC18]',
        defense: 'bg-[#E86412]',
        special_attack: 'bg-[#14C3F1]',
        special_defense: 'bg-[#4A6ADF]',
        speed: 'bg-[#D51DAD]',
    };

    const [animatedStats, setAnimatedStats] = useState([]);

    useEffect(() => {
        const statPercentages = pokemon.stats.map(stat => {
            const statPercentage = (stat.base_stat / 255) * 100;
            return statPercentage;
        });

        const timeout = setTimeout(() => {
            setAnimatedStats(statPercentages);
        }, 700);

        return () => clearTimeout(timeout);
    }, [pokemon.stats]);

    return (
        <div className="bg-neutral-900 p-4">
            <div className="flex flex-col gap-4 items-center">
                {pokemon.stats.map((stat, index) => {
                    const statType = stat.stat.name.toLowerCase().replace(/-/g, '_');
                    const statColor = colorClass[statType] || 'bg-gray-400';
                    const animatedWidth = (stat.base_stat / 255) * 100;

                    return (
                        <div key={index} className="flex w-full items-center gap-2">
                            <h6 className="uppercase w-1/4">{stat.stat.name.replace(/-/g, " ").replace(/Special/gi, "Sp.")}</h6>
                            <div className="relative flex-1 h-4 bg-neutral-700 rounded-full">
                                <div
                                    className={`h-full rounded-full text-xs text-white font-bold text-right px-2 transition-all duration-1000 ease-in-out ${statColor}`}
                                    style={{ width: `${animatedWidth}%` }}
                                >
                                </div>
                            </div>
                            <p className="w-12 text-center">{stat.base_stat}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}