import {createSlice} from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: "game",
    initialState: {
        animals: [],
        currentAnimal: undefined,
    },
    reducers: {
        setCurrentAnimal: (state, action) => {
            state.currentAnimal = action.payload
        },
        getAnimals: (state, action) => {
            state.animals = action.payload
        }
    }
})

export const {setCurrentAnimal, getAnimals} = gameSlice.actions

export default gameSlice.reducer;

