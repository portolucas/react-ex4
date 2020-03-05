import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    delFavorite,
    sortFavorite
  } from "../actions/favoriteActions";


export const FavoritesFilms = () => {

    const favorite = useSelector(state => state.favorite);
    const dispatch = useDispatch();

    const consoleFavorite = () => {
        console.log(favorite)
    }

    useEffect(() => {
        consoleFavorite();
    })
    return (
        <>
            <h1>Favorite Films</h1>
            <button onClick={() => dispatch(sortFavorite('Order'))}>ORDER</button>
            <ul>
                {favorite.favoriteFilm.map(film => (
                    <li key={film.name}>
                        {film.name}
                        <button onClick={() => dispatch(delFavorite({ name: film.name }))}>EXCLUIR</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
