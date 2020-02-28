import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";


import {
  setFavorite
} from "../actions/favoriteActions";


export const MoviesList = () => {

  const dispatch = useDispatch();

  const [movies, setMovies] = useState({ data: { results: [] } });

  const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
    <h1>Popular Movies</h1>
      <ul>
        {movies.data.results.map(movie => (
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

