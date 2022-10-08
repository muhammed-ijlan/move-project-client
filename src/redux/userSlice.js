import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false
}

const userSlice = createSlice({
    name: "user",

    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.currentUser = null;
            state.loading = false;
        }
    }

})

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
export default userSlice.reducer;