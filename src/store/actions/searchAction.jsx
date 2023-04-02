// actions/searchActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
// debugger
export const searchMovies = createAsyncThunk('movies/search', async (searchTerm) => {
    // debugger
  const response = await fetch(`../../../data.json`);
  const data = await response.json();
  const results = data.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
  return results;
});
