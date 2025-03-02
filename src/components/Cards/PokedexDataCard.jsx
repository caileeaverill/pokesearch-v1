import React from 'react'

export default function PokedexDataCard({ pokemon }) {

    // console.log(pokemon)

    return (
        <div className='bg-neutral-900 p-4'>
            <p className="">{`#${pokemon.id}`}</p>
            <h6 className="capitalize mb-4">{pokemon.name}</h6>
        </div>
    )
}
