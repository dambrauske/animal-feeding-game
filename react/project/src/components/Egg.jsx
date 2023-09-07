import React from 'react';

const Egg = ({onClick}) => {

    return (
        <div
            onClick={onClick}
            className="flex flex-col gap-1 justify-center items-center">
            <div className="rounded-3xl w-10 h-10 bg-indigo-500 text-white"></div>
            <button className="bg-white text-indigo-500 px-2 rounded hover:bg-indigo-500 hover:text-white">sell</button>
        </div>
    );
};

export default Egg;
