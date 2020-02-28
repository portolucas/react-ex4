import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";


export const FavoritesFilms = () => {

    const favorite = useSelector(state => state.favorite);

    return (
        <>
            <h1>Favorite Films</h1>
            <ul>
                {favorite.favoriteFilm.map(film => (
                    <li key={film.name}>
                        {film.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
