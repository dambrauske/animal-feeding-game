import {configureStore} from "@reduxjs/toolkit";
import gameReducer from "./features/gameSlice.jsx"

export default configureStore({
    reducer: {
        game: gameReducer,
    }
})
