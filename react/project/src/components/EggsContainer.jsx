import React from 'react';
import Egg from "./Egg.jsx";
import {setCurrentAnimal} from "../features/gameSlice.jsx";
import {useDispatch, useSelector} from "react-redux";

const EggsContainer = () => {

    const currentAnimal = useSelector(state => state.game.currentAnimal)
    const dispatch = useDispatch()

    const sellEgg = () => {
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({id: currentAnimal.id})
        }

        fetch('http://localhost:8000/sellEgg', options)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                dispatch(setCurrentAnimal(data.data))
            })
    }

    return (
        <div className="flex flex-col gap-4 bg-slate-100 w-60 h-96 rounded-xl border p-4">
            <div>eggs container:</div>
            <div className="flex flex-wrap gap-4">

                {currentAnimal.eggs && currentAnimal.eggs.map((egg, i) => (
                    <Egg
                        key={i}
                        onClick={sellEgg}
                    />
                ))}


            </div>
        </div>
    );
};

export default EggsContainer;
