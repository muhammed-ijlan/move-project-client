import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    isLoading: false
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
        }
    }

})

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;