import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Progressbar from "../components/Progressbar.jsx";
import {setCurrentAnimal} from "../features/gameSlice.jsx";
import EggsContainer from "../components/EggsContainer.jsx";

const GamePage = () => {

    const currentAnimal = useSelector(state => state.game.currentAnimal)
    const dispatch = useDispatch()


    useEffect(() => {

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({id: currentAnimal.id})
        }

        console.warn('On component mount')
        const tick = setInterval(() => {


            fetch(`http://localhost:8000/animal/${currentAnimal.id}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.data)
                    dispatch(setCurrentAnimal(data.data))

                })

        }, 1_000)

        return () => {
            console.warn('On component unmount')
            clearInterval(tick)
        }
    }, []);



   const feedAnimal = () => {
       const options = {
           method: "POST",
           headers: {
               "content-type": "application/json"
           },
           body: JSON.stringify({id: currentAnimal.id})
       }

       fetch('http://localhost:8000/feed', options)
           .then(res => res.json())
           .then(data => {
               console.log(data.data)
               dispatch(setCurrentAnimal(data.data))

           })
   }




    return (
        <div className="bg-slate-50 flex gap-16 justify-center items-center h-screen">
            <div className="flex flex-col gap-4 items-center">
                <div className="bg-slate-200 rounded-full p-10 flex justify-center items-center">
                    <div className="w-96 h-96">
                        <img className="w-full h-full object-contain" src={currentAnimal.image} alt=""/>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div>

                    </div>
                    <Progressbar
                        width={currentAnimal.hunger}/>
                </div>
                <div className="flex gap-2 items-center">
                    <div>

                    </div>
                    <Progressbar
                        width={currentAnimal.eggProgress}
                    />
                </div>
            </div>


            <div className="flex gap-4">

                <div>
                    <EggsContainer/>
                    <div>Money: {currentAnimal.money}</div>
                </div>
                <div className={"flex-col flex gap-4 items-center p-4"}>
                    <div className={"w-20 h-20"}>
                        <img src="https://freeiconshop.com/wp-content/uploads/edd/food-flat.png" alt=""/>
                    </div>
                    <div>food price: 10 $</div>
                    <button
                        onClick={feedAnimal}
                        className="bg-slate-300 py-1 px-4 rounded hover:bg-indigo-400 hover:text-white">Feed</button>
                </div>

            </div>


        </div>
    );
};

export default GamePage;
