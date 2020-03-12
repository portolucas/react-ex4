import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    delFavorite,
    sortFavorite
  } from "../actions/favoriteActions";


export const FavoritesFilmsContainer = () => {
    const dispatch = useDispatch();
    const favorite = useSelector(state => state.favorite);
    
    return (
        <>
            <h1>Favorite Films</h1>
            <button onClick={() => dispatch(sortFavorite('Order'))}>ORDER</button>
            <ul>
                {favorite.favoriteFilm.map((film, index) => (
                    <li key={index}>
                        {film.name}
                        <button onClick={() => dispatch(delFavorite({ id: film.id }))}>EXCLUIR</button>
                    </li>
                ))}
            </ul>
        </>
    )
}
