import React from 'react';
import { usePokemon } from "../../context/PokemonContext";
import { setPokemonGameVersionStyles } from '../../utils/helpers';

export default function GameAppearanceCard({ className = "" }) {
    const { pokemon } = usePokemon();

    const gameVersionsObj = pokemon.game_indices.map((game) => game.version.name);

    const gameVersions = gameVersionsObj.map(gameName => {
        switch (gameName) {
            case 'firered':
                return 'fire red';
            case 'leafgreen':
                return 'leaf green';
            case 'heartgold':
                return 'heart gold';
            case 'soulsilver':
                return 'soul silver';
            default:
                return gameName.replace(/-/g, ' ');
        }
    });

    return (
        <div className={`bg-neutral-900 p-4 gap-4 ${className}`}>
            <div className='flex flex-wrap gap-4'>
                {
                    gameVersions.length > 0 ? (
                        gameVersions.map((game, index) => (
                            <div key={index} className="">
                                <div className="w-10 h-10 rounded-full mx-auto" style={{ backgroundColor: setPokemonGameVersionStyles(gameVersionsObj[index]) }} />
                                <h6 className="text-center capitalize">{game}</h6>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full mx-auto" style={{ backgroundColor: setPokemonGameVersionStyles(gameVersionsObj[0]) }} />
                            <h6 className="text-center">{gameVersionsObj[0]}</h6>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
