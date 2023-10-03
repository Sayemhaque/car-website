import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./services/baseApi";
import searchSlice from "./services/searchSlice";
import carSlice from "./services/carSlice";


export const store = configureStore({
    reducer:{
        [baseApi.reducerPath]: baseApi.reducer,
        search:searchSlice,
        carSlice
    },
    //middleware
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})