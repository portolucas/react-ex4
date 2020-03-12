import React, { useEffect } from "react";
import { MoviesService } from "../services/MoviesService";
import { useDispatch, useSelector} from "react-redux";


import {
  setPopularMovies,
} from "../actions/favoriteActions";


export const MoviesListContainer = (type) => {

  const dispatch = useDispatch();
  const popular = useSelector(state => state.favorite);

  useEffect(() => {
    const requestMovies = async () => {
      const moviesResult = await MoviesService.getPopularMovies();
      dispatch(setPopularMovies(moviesResult.data.results));
      }
    requestMovies();
  }, []);

  return popular[type];
}

