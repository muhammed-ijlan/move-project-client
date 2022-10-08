import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import movieSlice from "./movieSlice";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const reducer = combineReducers({
    user: userSlice,
    movie: movieSlice

})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer
})