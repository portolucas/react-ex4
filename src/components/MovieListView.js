import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { MoviesListContainer } from './MoviesListContainer';


import {
    setFavorite,
    sortPopular
} from "../actions/favoriteActions";

export const MoviesListView = () => {
    const popular = MoviesListContainer("popularFilm");
    const dispatch = useDispatch();
    return (
        <>
            <h1>Popular Movies</h1>
            <button onClick={() => dispatch(sortPopular('Order'))}>ORDER</button>
            <ul>
                {popular.map(movie => (
                    <li key={movie.title}>
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                        <button onClick={() => dispatch(setFavorite({ name: movie.title, id: movie.id }))}>FAVORITAR</button>
                    </li>
                ))}
            </ul>
            <p><Link to={"/favorites"}>Favorites</Link></p>
        </>
    )
}
