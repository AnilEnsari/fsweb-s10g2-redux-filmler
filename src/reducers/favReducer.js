import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
  displayFavorites: false,
};
// export const toggleFavorites = () => {
//   return ({ type: TOGGLE_FAVORITES });
// }

// export const addFavorite = (movie) => {
//   return ({ type: ADD_FAVORITE, payload: movie });
// }

// export const removeFavorite = (id) => {
//   return ({ type: REMOVE_FAVORITE, payload: id });
// }

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action?.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};

export default favReducer;
