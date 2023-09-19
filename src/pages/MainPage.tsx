import React from 'react';
import Header from "../components/header/Header";
import Content from "../components/header/content/Content";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";

const MainPage = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies);
    return (
        <div>
            <h2>Не встигав через службу все надолужити і загнувся на тому що запити просто не відправлялися. ТОму відправляю так щоб просто хоча б розібратися в чому проблема</h2>
            <Header/>
            <Content shortFilm={movies[0]}/>
        </div>
    );
};

export {MainPage};