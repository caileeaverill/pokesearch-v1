import React from "react";
import { usePokemon } from "../../context/PokemonContext";
import { setPokemonTypeStyles, checkTypeRelationships, getRelationshipIcon } from "../../utils/helpers";

export default function PokedexDataCard({ className = "" }) {
    const { pokemon } = usePokemon();

    if (!pokemon) return null;

    const relationships = checkTypeRelationships(pokemon.types.map(type => type.type.name));

    return (
        <div className={`bg-neutral-900 p-4 text-white ${className}`}>
            <div className="flex flex-wrap gap-6">
                <div className="border-b border-neutral-600 pb-2 w-full flex gap-4 justify-center">
                    {pokemon.types.map((type, idx) => {
                        const bgColor = setPokemonTypeStyles(type.type.name);
                        return (
                            <div key={idx} className="text-center">
                                <div
                                    className="w-10 h-10 rounded-full mx-auto"
                                    style={{ backgroundColor: bgColor }}
                                />
                                <h6 className="capitalize">{type.type.name}</h6>
                            </div>
                        );
                    })}
                </div>
                {Object.entries(relationships).map(([relationshipType, types], index) => {
                    const Icon = getRelationshipIcon(relationshipType);
                    return (
                        <div key={index} className="flex flex-wrap items-center flex-none w-full gap-4">
                            <div className="relative group">
                                <Icon className="w-10 h-10 mr-2" />
                                <span className="absolute left-1/2 top-full mb-2 -translate-x-1/2 bg-zinc-700 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                                    {relationshipType.replace(/([A-Z])/g, " $1").toLowerCase().replace(/^./, (str) => str.toUpperCase())}
                                </span>
                            </div>
                            {types.length > 0 ? (
                                types.map((type, idx) => {
                                    const bgColor = setPokemonTypeStyles(type);
                                    return (
                                        <div key={idx} className="flex flex-col justify-center gap-0.5">
                                            <div
                                                className="w-6 h-6 rounded-full m-auto"
                                                style={{ backgroundColor: bgColor }}
                                            ></div>
                                            <h6 className="text-sm">{type}</h6>
                                        </div>
                                    );
                                })
                            ) : (
                                <span>None</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}