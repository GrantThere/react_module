import {configureStore} from "@reduxjs/toolkit";
import {movieReduser} from "./slices/movieSlice";

const store = configureStore({
    reducer: {
        movies: movieReduser
    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {store}