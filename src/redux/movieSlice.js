import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    movies: null,
    isLoading: false,
    currentMovie: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        fetchMovieStart: (state) => {
            state.isLoading = true
        },
        fetchMovieSuccess: (state, action) => {
            state.isLoading = false;
            state.movies = action.payload;
        },
        fetchMovieFailure: (state) => {
            state.isLoading = false;
        },
        fetchCurrentMovie: (state, action) => {
            state.currentMovie = action.payload
        }
    }
})

export const { fetchMovieFailure, fetchMovieStart, fetchMovieSuccess, fetchCurrentMovie } = movieSlice.actions
export default movieSlice.reducer;