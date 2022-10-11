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
    }
})

export const { fetchMovieFailure, fetchMovieStart, fetchMovieSuccess } = movieSlice.actions
export default movieSlice.reducer;