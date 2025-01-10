import { configureStore } from "@reduxjs/toolkit";
// import 
import listingReducer from "./slices/listingSlice";

export const store = configureStore({
    reducer: {
        listing: listingReducer
    },
});