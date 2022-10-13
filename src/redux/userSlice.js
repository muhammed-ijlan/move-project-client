import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    currentUser: null,
    isLoading: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.currentUser = null;
            state.isLoading = false;
        },
        logOut: (state) => {
            state.currentUser = null;
            state.isLoading = false;
            state.token = null;
        },
        addToList: (state, action) => {
            if (state.currentUser.movieList.includes(action.payload)) {
                state.currentUser.movieList.splice(state.currentUser.movieList.findIndex((id) => id === action.payload), 1)
            } else {
                state.currentUser.movieList.push(action.payload)
            }
        }

    }

})

export const { loginFailure, loginStart, loginSuccess, logOut, setToken, addToList } = userSlice.actions;
export default userSlice.reducer;