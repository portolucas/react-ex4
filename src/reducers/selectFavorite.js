import {
  SET_FAVORITE,
  DEL_FAVORITE,
  SORT_FAVORITE,
  POPULAR_MOVIES,
  SORT_POPULAR
} from "../actions/favoriteActions";

const initialState = {
  favoriteFilm: [],
  popularFilm: []
};

export const favorite = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favoriteFilm: state.favoriteFilm.concat(action.payload)
      };

    default:
      return state;

    case DEL_FAVORITE:
      return {
        ...state,
        favoriteFilm: state.favoriteFilm.filter(d => d.name !== action.payload)
      };

    case SORT_FAVORITE:
      return {
        ...state,
        favoriteFilm: state.favoriteFilm.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : 0)
      }

      case SORT_POPULAR:
      return {
        ...state,
        popularFilm: state.popularFilm.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : 0)
      }

    case POPULAR_MOVIES:
      return {
        ...state,
        popularFilm: state.popularFilm = action.payload
      };
  }
}
