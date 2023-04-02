import Data from '../../../data.json';
export const UPDATE_BOOKMARK_STATUS = 'UPDATE_BOOKMARK_STATUS';


import { createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';

export const fetchAllMovies = createAsyncThunk('movies/fetchAllMovies', async() => {
    const response = await fetch(`../../../data.json`);
    const data = await response.json();
    // console.log(data);
    return data;
});

export const fetchMoviesCategory = createAsyncThunk('movies/fetchMoviesCategory' , async () => {
    const response = await fetch(`../../../data.json`);
    const data = await response.json();
    const movies = data.filter((movies) => movies.category === "Movie");
    return movies;
} )

export const fetchMoviesTvseries = createAsyncThunk('movies/fetchMoviesTvseries' , async () => {
    const response = await fetch(`../../../data.json`);
    const data = await response.json();
    const movies = data.filter((movies) => movies.category === "TV Series");
    return movies;
} )

export const fetchIsBookmarked = createAsyncThunk('movies/fetchIsBookmarked' , async () => {
    const response = await fetch(`../../../data.json`);
    const data = await response.json();
    const movies = data.filter((movies) => movies.category === "TV Series");
    return movies;
} )


export const SEARCH_MOVIES = 'SEARCH_MOVIES';


export const searchMovies = (query) => ({
    type: SEARCH_MOVIES,
    payload: query,
  });
  

  export const updateBookmarkStatus = (id, isBookmarked) => {
    // debugger
    console.log(id,isBookmarked);
    return {
      type: UPDATE_BOOKMARK_STATUS,
      payload: {
        id,
        isBookmarked,
      },
    };
  };
  