import { configureStore } from "@reduxjs/toolkit";
import ContentSlice from "../slice/ContentSlice";

export const store=configureStore({
    reducer:{
        content:ContentSlice,
    }
})