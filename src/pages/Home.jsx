import React, { useEffect, useState } from 'react'
import SuggestedSearches from '../components/SuggestedSearches/SuggestedSearches';
import { PiDna, PiMagnifyingGlass, PiFire } from "react-icons/pi";

const suggestedSearches = [
    {
        title: 'Search by Name',
        description: 'Find your favorite Pokémon by name or nickname',
        icon: <PiMagnifyingGlass />
    },
    {
        title: 'Search by Generation',
        description: 'Discover Pokémon from every era, from Kanto to Paldea',
        icon: <PiDna />

    },
    {
        title: 'Search by Type',
        description: 'Find Pokémon by their elemental power—Fire, Water, Electric, and more',
        icon: <PiFire />
    }
];

export default function Home() {
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsTextVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='flex items-center gap-4 text-white mt-20'>
            <div className={`flex flex-col gap-4 basis-1/3 ${isTextVisible ? 'opacity-100 transition-opacity duration-2000' : 'opacity-0 transition-opacity duration-1500'}`}>
                <h1 className='text-3xl font-bold'>Catch 'Em All, Know 'Em All!</h1>
                <p>Catch ’em all and learn everything about them! Your ultimate Pokédex powered by the Pokémon API.</p>
            </div>
            <div className='flex gap-4 basis-2/3'>
                {suggestedSearches.map((item, index) => (
                    <SuggestedSearches
                        key={index}
                        index={index}
                        title={item.title}
                        icon={item.icon}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}
