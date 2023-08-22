import { configureStore } from "@reduxjs/toolkit";
import reducer from "./CounterSlice";

export const store = configureStore({
    reducer : {
        counter : reducer
    }   
})
