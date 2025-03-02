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

    const [animatedStats, setAnimatedStats] = useState(
        pokemon.stats.map(() => 0) // initialize with 0% width for all stats
    );

    useEffect(() => {
        const statPercentages = pokemon.stats.map(stat => (stat.base_stat / 255) * 100);

        const intervalDuration = 20; // time between each progress step
        const incrementPerStep = 2; // how much the bar width increases per step

        const interval = setInterval(() => {
            setAnimatedStats(prevStats => {
                return prevStats.map((width, index) => {
                    const targetWidth = statPercentages[index];
                    // Increase the width gradually until it reaches the target value
                    if (width < targetWidth) {
                        return Math.min(width + incrementPerStep, targetWidth);
                    }
                    return width;
                });
            });
        }, intervalDuration);

        // Stop the interval once all bars have reached their target width
        setTimeout(() => {
            clearInterval(interval);
        }, 700); // stops after 700ms, ensuring the bars fill in that time

        return () => clearInterval(interval);
    }, [pokemon.stats]);

    return (
        <div className="bg-neutral-900 p-4">
            <div className="flex flex-col gap-4 items-center">
                {pokemon.stats.map((stat, index) => {
                    const statType = stat.stat.name.toLowerCase().replace(/-/g, '_');
                    const statColor = colorClass[statType] || 'bg-gray-400';
                    const animatedWidth = animatedStats[index];

                    return (
                        <div key={index} className="w-full flex flex-col gap-1">
                            <h6 className="uppercase">{stat.stat.name.replace(/-/g, " ").replace(/Special/gi, "Sp.")}</h6>
                            <div className="flex w-full items-center gap-2">
                                <div className="relative flex-1 h-4 bg-neutral-700 rounded-full">
                                    <div
                                        className={`h-full rounded-full text-xs text-white font-bold text-right px-2 transition-all duration-1000 ease-in-out ${statColor}`}
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