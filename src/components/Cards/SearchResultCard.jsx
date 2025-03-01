import React from 'react'

export default function SearchResultCard({ pokemon }) {
    return (
        <div className='flex flex-col bg-neutral-900 p-6 flex-1/3'>
            <h1 className='text-white'>{pokemon.name}</h1>
        </div>
    )
}
