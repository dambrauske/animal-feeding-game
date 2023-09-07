import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAnimals, setCurrentAnimal} from "../features/gameSlice.jsx";
import AnimalCard from "../components/animalCard.jsx";
import {useNavigate} from "react-router-dom";


const Index = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const animals = useSelector((state) => state.game.animals)
    const currentAnimal = useSelector((state) => state.game.currentAnimal)

    const [error, setError] = useState('')


    useEffect(() => {

        fetch('http://localhost:8000/animals')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(getAnimals(data.data))
            })

    }, [])

    const startGame = () => {
        if (currentAnimal) {
            navigate('/game')

            const options = {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({id: currentAnimal.id})
            }
            fetch('http://localhost:8000/play',options)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        } else {
            setError('Please select your animal')
        }
    }


    return (
        <div className="flex flex-col bg-slate-100 h-screen justify-center items-center gap-10">
            <div className="flex justify-center items-center p-4  gap-4">
                {animals.map((animal, i) => (
                    <AnimalCard
                        onClick={() => (dispatch(setCurrentAnimal(animal)))}
                        key={i}
                        animal={animal}
                    />
                ))}
            </div>
            <button
                onClick={startGame}
                className="bg-indigo-300 px-4 py-2 rounded hover:bg-indigo-400 hover:text-white duration-200 ease-out">
                START GAME</button>
            <div className={"h-8 text-red-600"}>{error}</div>
        </div>

    );
};

export default Index;
