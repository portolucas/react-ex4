export const SET_FAVORITE = "SET_FAVORITE";
export const DEL_FAVORITE = "DEL_FAVORITE";
export const SORT_FAVORITE = "SORT_FAVORITE";
export const POPULAR_MOVIES = "POPULAR_MOVIES";
export const SORT_POPULAR = "SORT_POPULAR";

export const setFavorite = favoriteFilm => ({
  type: SET_FAVORITE,
  payload: favoriteFilm
});

export const delFavorite = favoriteFilm => ({
  type: DEL_FAVORITE,
  payload: favoriteFilm.id
});

export const sortFavorite = favoriteFilm => ({
  type: SORT_FAVORITE,
  payload: favoriteFilm.name
});

export const setPopularMovies = popularMovies => ({
  type: POPULAR_MOVIES,
  payload: popularMovies
});

export const sortPopular = popularFilm => ({
  type: SORT_POPULAR,
  payload: popularFilm.title
});
