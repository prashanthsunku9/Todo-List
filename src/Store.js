import { configureStore } from "@reduxjs/toolkit";
import tslice from "./slices/tslice";

export const store=configureStore({
        reducer:{
            todo:tslice
        }
})

