import {createSlice} from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        animals: [],
        currentAnimal: undefined,
        animalDied: false,
    },
    reducers: {
        setCurrentAnimal: (state, action) => {
            state.currentAnimal = action.payload
        },
        getAnimals: (state, action) => {
            state.animals = action.payload
        },
        checkIfDead: (state) => {
            if (state.currentAnimal.hunger <= 0) {
                state.animalDied = true
            }
    }
    }
})

export const {setCurrentAnimal, checkIfDead, getAnimals} = gameSlice.actions

export default gameSlice.reducer;

