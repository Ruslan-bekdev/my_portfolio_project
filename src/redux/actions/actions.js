import {types} from "../types";
import {useFetch} from "../../compnents/universal/functions/requests";

export const changeTextAction = () => ({
    type: types.CHANGE_TEXT,
});

export const setInitialProductsAction = (data) => ({
    type: types.products.SET_INITIAL_DATA,
    payload: data,
});
export const setProductsAction = (data) => ({
    type: types.products.SET_DATA,
    payload: data,
});
export const setProductsSearchValueAction = (value) => ({
    type: types.products.SET_SEARCH_VALUE,
    payload: value,
});
export const setProductsLoadingStatusAction = (isLoading) => ({
    type: types.products.SET_LOADING_STATUS,
    payload: isLoading,
});
export const setProductsErrorAction = (isLoading) => ({
    type: types.products.SET_LOADING_STATUS,
    payload: isLoading,
});

export const setInitialTodosAction = (data) => ({
    type: types.todos.SET_INITIAL_DATA,
    payload: data,
});
export const setTodosAction = (data) => ({
    type: types.todos.SET_DATA,
    payload: data,
});
export const setTodosSearchValueAction = (value) => ({
    type: types.todos.SET_SEARCH_VALUE,
    payload: value,
});
export const setTodosLoadingStatusAction = (isLoading) => ({
    type: types.todos.SET_LOADING_STATUS,
    payload: isLoading,
});
export const setTodosErrorAction = (isLoading) => ({
    type: types.todos.SET_LOADING_STATUS,
    payload: isLoading,
});

export const setInitialUsersAction = (data) => ({
    type: types.users.SET_INITIAL_DATA,
    payload: data,
});
export const setUsersAction = (data) => ({
    type: types.users.SET_DATA,
    payload: data,
});
export const setUsersLoadingStatusAction = (isLoading) => ({
    type: types.users.SET_LOADING_STATUS,
    payload: isLoading,
});
export const setUsersErrorAction = (isLoading) => ({
    type: types.users.SET_LOADING_STATUS,
    payload: isLoading,
});