const initialState = {
  favorites: [],
  displayFavorites: false,
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    // case DELETE_MOVIE:
    //   return {
    //     ...state,
    //     movies: state.movies.filter((item) => action.payload !== item.id),
    //   };
    // case ADD_MOVIE:
    //   return { ...state, movies: [...state.movies, action.payload] };
    default:
      return state;
  }
};

export default favReducer;