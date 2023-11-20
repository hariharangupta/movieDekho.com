import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from "../../common/apis/MovieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movieDekho.com/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi
      .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${term}&type="movie"`)
      .catch((err) => {
        console.log(err, "err");
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movieDekho.com/fetchAsyncShows",
  async (term) => {
    const response = await movieApi
      .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${term}&type="series"`)
      .catch((err) => {
        console.log(err, "err");
      });
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetial = createAsyncThunk(
  "movieDekho.com/fetchAsyncMovieOrShowDetial",
  async (id) => {
    const response = await movieApi
      .get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}&Plot=full`)
      .catch((err) => {
        console.log(err, "err");
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const MovieSlicer = createSlice({
  name: "Movie App",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: (state, action) => {
      return console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      return { ...state, movies: action.payload };
    },
    [fetchAsyncShows.fulfilled]: (state, action) => {
      return { ...state, shows: action.payload };
    },
    [fetchAsyncMovieOrShowDetial.fulfilled]: (state, action) => {
      return { ...state, selectedMovieOrShow: action.payload };
    },
    [fetchAsyncMovies.rejected]: (state) => {
      console.log("error");
    },
  },
});

export const { addMovies, removeSelectedMovieOrShow } = MovieSlicer.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;

export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default MovieSlicer.reducer;
