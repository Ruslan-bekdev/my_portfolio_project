import {configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger/src";
import textReducer from "./textSlice";

const store = configureStore({
    reducer:{
        textReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(createLogger())
});

export default store;