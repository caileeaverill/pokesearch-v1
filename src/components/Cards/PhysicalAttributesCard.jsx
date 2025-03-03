import React from 'react'
import { usePokemon } from "../../context/PokemonContext";

export default function PhysicalAttributesCard({ className = "" }) {

    const { pokemon } = usePokemon();

    if (!pokemon) return null;

    const physicalAttributes = [
        {
            label: "Height",
            value: `${pokemon.height / 10} m`,
        },
        {
            label: "Weight",
            value: `${((pokemon.weight / 10) * 2.20462).toFixed(2)} lbs`,
        },
    ];

    return (
        <div className={`bg-neutral-900 p-4 flex justify-center gap-4 text-white ${className}`}>
            <div className="flex flex-col text-center">
                <p>{physicalAttributes[0].value}</p>
                <h6 className="uppercase">{physicalAttributes[0].label}</h6>
            </div>

            <div className="border-l-2 border-neutral-600 h-full"></div> {/* Border in the middle */}

            <div className="flex flex-col text-center">
                <p>{physicalAttributes[1].value}</p>
                <h6 className="uppercase">{physicalAttributes[1].label}</h6>
            </div>
        </div>
    )
}
