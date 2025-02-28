import React, { useEffect, useState } from 'react';

export default function SuggestedSearches({ title, description, index }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1200 + index * 100);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div
            className={`flex flex-col text-white bg-neutral-900 p-6 basis-1/3 ${isVisible ? 'opacity-100 transition-opacity duration-2000' : 'opacity-0 transition-opacity duration-1500'}`}
            style={{ transform: `translateY(-${index * 45}px)` }}>
            <p>{index}</p>
            <h2 className='text-2xl font-bold flex-grow py-40'>{title}</h2>
            <p className='mt-auto text-sm'>{description}</p>
        </div>
    );
}