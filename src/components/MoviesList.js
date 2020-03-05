import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from "react-redux";


import {
  setFavorite,
  setPopularMovies,
  sortPopular
} from "../actions/favoriteActions";


export const MoviesList = () => {

  const dispatch = useDispatch();
  const popular = useSelector(state => state.favorite);

  const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    dispatch(setPopularMovies(moviesResult.data.results));
    console.log(popular);
    }

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
    <h1>Popular Movies</h1>
    <button onClick={() => dispatch(sortPopular('Order'))}>ORDER</button>
      <ul>
        {popular.popularFilm.map(movie => (
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

