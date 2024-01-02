import {configureStore,} from '@reduxjs/toolkit';
import logger from "redux-logger/src";
import productsReducer from "./productsSlice";
import todosReducer from "./todosSlice";
import usersReducer from "./usersSlice";

export const store = configureStore({
    reducer: {
        productsReducer,
        todosReducer,
        usersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});