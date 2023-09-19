import {IRes} from "../interfaces/IRes";
import {IMovie} from "../interfaces/IMovie";
import axios from "axios";
import {baseURL, urls} from "../cons/urls";
import {IGenres} from "../interfaces/IGenres";

const api = axios.create({baseURL});

api.interceptors.request.use(req => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTVhZjBmNWI1OWM4ZDNiYzRmMDY3ZWY1NjkxMzkyMiIsInN1YiI6IjY0ZmRiMTFlNmEyMjI3MDBmZDFlZGRjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p7xI3PCcumZC-sjmzLxW-md7IcEi4z34TDn3XPRtBiI';
    req.headers.Authorization = `Bearer ${access}`
    return req
})

const MovieServices = {
    getAllMovies: (): IRes<IMovie[]> => api.get(urls.allMovie),
    getAllGenres: (): IRes<IGenres[]> => api.get(urls.allGenres)
}

export {MovieServices}