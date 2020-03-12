import React from 'react';
import { MovieIdContainer } from './MovieIdContainer';

export const MoviesIdView = (props) => {
   const moviesId = MovieIdContainer(props);

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

