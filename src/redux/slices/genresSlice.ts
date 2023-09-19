import {IMovie} from "../../interfaces/IMovie";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MovieServices} from "../../services/MovieServices";
import {AxiosError} from "axios/index";
import {IGenres} from "../../interfaces/IGenres";

interface IState {
    genres: IGenres[]
}

const initialState: IState = {
    genres: []
}

const getAllGenres = createAsyncThunk<IGenres[], void>(
    'carSlice/getAllMovies',  // @ts-ignore
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await MovieServices.getAllMovies();
            return data
        } catch (e) {
            const err = e as AxiosError// @ts-ignore
            return rejectWithValue(err.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllGenres.fulfilled, (state, action)=>{
            state.genres = action.payload
        })
})

const {reducer: genresReduser, actions} = genresSlice;

const movieActions = {
    ...actions,
    getAllGenres
}

export {
    movieActions,
    genresReduser
}