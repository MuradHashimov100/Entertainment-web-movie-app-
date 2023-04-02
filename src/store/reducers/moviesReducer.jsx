
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllMovies } from "../actions/moviesActions";
import { searchMovies } from "../actions/moviesActions";
import { fetchMoviesCategory } from "../actions/moviesActions";
import fs from 'fs/promises';

const initialState = {
    isLoading: false,
    error:null,
    movies:[],
    searchQuery: '',
}
// debugger
export const movieSlice =  createSlice({
    name:'movies',
    initialState,
    reducers:{
      toggleBookmark: (state, action) => {
        const movie = state.movies.find((movie) => movie.id === action.payload.id);
        movie.isBookmarked = !movie.isBookmarked;

        // return movie;
        // action.payload.isBookmarked = !action.payload.isBookmarked;
        console.log(movie);
        console.log(action.payload.id,movie.isBookmarked);
      },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllMovies.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        });
        builder.addCase(fetchAllMovies.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.movies = action.payload;
        });
        builder.addCase(fetchAllMovies.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
        builder.addCase(fetchMoviesCategory.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        });
        builder.addCase(fetchMoviesCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.movies = action.payload;
        });
        builder.addCase(fetchMoviesCategory.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
      }
});


 export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BOOKMARK_STATUS:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie.id === action.payload.id) {
            return {
              ...movie,
              isBookmarked: action.payload.isBookmarked,
            };
          }
          return movie;
        }),
      };
    default:
      return state;
  }
};




export default movieSlice.reducer;





