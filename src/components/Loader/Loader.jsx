import React from "react";
import img from '../../../public/images/pokeball.svg';

const Loader = ({ loadedCount, totalCount }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="loader">
                <img className="h-full w-full" src={img} alt="Image of pokeball" />
            </div>
            {loadedCount && (
                <p className="text-white">{`${loadedCount} / ${totalCount} cards loaded`}</p>
            )}
        </div>
    );
}

export default Loader;