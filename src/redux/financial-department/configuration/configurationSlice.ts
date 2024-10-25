import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMovies: [],
  movieDetails: {},
  movieIds:  [],
  isLoading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    getAllMoviesData: (state, action) => {
      state.allMovies = action.payload;
    },
    getMovieDetailsData: (state, action) => {
      state.movieDetails = action.payload
    },
    getMovieIds: (state, action) => {
      state.movieIds = action.payload
    }
  },
});

export const { getAllMoviesData, getMovieDetailsData, getMovieIds, setIsLoading } = moviesSlice.actions;

export default moviesSlice.reducer;
