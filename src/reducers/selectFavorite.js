import {
  SET_FAVORITE
} from "../actions/favoriteActions";

const initialState = {
  favoriteFilm: [
    {
      name: "Teste",
      id: 1
    }
  ]
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
  }
};
