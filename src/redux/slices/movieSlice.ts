import {IMovie} from "../../interfaces/IMovie";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {MovieServices} from "../../services/MovieServices";

interface IState {
    movies: IMovie[]
}

const initialState: IState = {
    movies: []
}

const getAllMovies = createAsyncThunk<IMovie[], void>(
    'carSlice/getAllMovies',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await MovieServices.getAllMovies();
            return data
        } catch (e) {
            const err = e as AxiosError
            // @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllMovies.fulfilled, (state, action)=>{
            state.movies = action.payload
        })
})

const {reducer: movieReduser, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies
}

export {
    movieActions,
    movieReduser
}