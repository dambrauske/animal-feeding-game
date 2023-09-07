import React from 'react';
import {useSelector} from "react-redux";

const AnimalCard = ({animal, onClick}) => {

    const currentAnimal = useSelector((state) => state.game.currentAnimal)
    console.log(currentAnimal,'currentAnimal')
    console.log(animal,'animal')

    return (
        <div
            onClick={onClick}
            className={`p-4 border ${currentAnimal && currentAnimal.id === animal.id ? "bg-indigo-200" : "bg-slate-50"} rounded w-60 h-60 hover:bg-indigo-200 duration-200 ease-out cursor-pointer`}>
            <img className="h-full w-full object-contain" src={animal.image} alt=""/>
        </div>
    );
};

export default AnimalCard;
