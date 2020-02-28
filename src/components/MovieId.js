import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService"

export const MovieId = (props) => {

  const [moviesId, setMoviesId] = useState({ data: { results: [] } });

  const requestMovies = async () => {
    const moviesResult = await MoviesService.getIdMovies(props.match.params.id);
    setMoviesId(moviesResult);
  };

  useEffect(() => {
    requestMovies();
  }, []);

  return (
    <>
    <h1>{moviesId.data.title}</h1>
    <p>{moviesId.data.overview}</p>
    <p>Release date: {moviesId.data.release_date}</p>
    <p>Original language: {moviesId.data.original_language}</p>
    <p>Popularity: {moviesId.data.popularity}</p>
    <p>Vote avarage: {moviesId.data.vote_average}</p>
    </>
  )
}

