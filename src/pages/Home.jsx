import React, { useEffect, useState } from 'react'
import SuggestedSearches from '../components/SuggestedSearches/SuggestedSearches';

const suggestedSearches = [
    {
        title: 'Search by Name',
        description: 'Find your favorite Pokémon by name or nickname',
    },
    {
        title: 'Search by Generation',
        description: 'Discover Pokémon from every era, from Kanto to Paldea',

    },
    {
        title: 'Search by Type',
        description: 'Find Pokémon by their elemental power—Fire, Water, Electric, and more',
    }
];

export default function Home() {
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsTextVisible(true), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='flex items-center py-12 gap-8'>
            <div className={`text-white basis-1/3 ${isTextVisible ? 'opacity-100 transition-opacity duration-2000' : 'opacity-0 transition-opacity duration-1500'}`}>
                <h1 className='text-3xl font-bold whitespace-pre-wrap w-100'>Catch 'Em All, Know 'Em All!</h1>
                <p className='mt-6'>Catch ’em all and learn everything about them! Your ultimate Pokédex powered by the Pokémon API.</p>
            </div>
            <div className='flex gap-4 basis-2/3'>
                {suggestedSearches.map((item, index) => (
                    <SuggestedSearches
                        key={index}
                        index={index}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}
