import React, { useState, useEffect } from "react";
import { MoviesService } from "../services/MoviesService"

export const MovieIdContainer = (props) => {

  const [moviesId, setMoviesId] = useState({ data: { results: [] } });

  useEffect(() => {
    const requestMovies = async () => {
      const moviesResult = await MoviesService.getIdMovies(props.match.params.id);
      setMoviesId(moviesResult);
    };
    requestMovies();
  }, []);

  return moviesId;
}

