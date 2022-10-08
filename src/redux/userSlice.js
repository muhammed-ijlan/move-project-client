import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isLoading: false,
    token: null,
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
            state.token = null
        },
        setToken: (state, action) => {
            state.token = action.payload;
        }

    }

})

export const { loginFailure, loginStart, loginSuccess, logOut, setToken } = userSlice.actions;
export default userSlice.reducer;