import { configureStore } from "@reduxjs/toolkit";
import MovieSlicer from "./Movies/MovieSlicer";

const Store = configureStore({
  reducer: {
    movies: MovieSlicer,
  },
});

export default Store;
