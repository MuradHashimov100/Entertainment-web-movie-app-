import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/moviesReducer";
import searchReducer from "./reducers/searchReducer";

const store = configureStore({
    reducer:{
        movies:moviesReducer,
        search:searchReducer,
    }
})

export default store;