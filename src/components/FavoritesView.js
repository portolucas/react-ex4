import React from "react";
import { useDispatch } from "react-redux";
import { MoviesListContainer } from './MoviesListContainer';

import {
    delFavorite,
    sortFavorite
  } from "../actions/favoriteActions";


export const FavoritesFilmsContainer = () => {

    const favorite = MoviesListContainer("favoriteFilm");
    const dispatch = useDispatch();
    return (
        <>
            <h1>Favorite Films</h1>
            <button onClick={() => dispatch(sortFavorite('Order'))}>ORDER</button>
            <ul>
                {favorite.map(film => (
                    <li key={film.name}>
                        {film.name}
                        <button onClick={() => dispatch(delFavorite({ name: film.name }))}>EXCLUIR</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
