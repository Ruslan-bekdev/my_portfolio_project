import {types} from "../types";

const {
    SET_INITIAL_DATA,
    SET_DATA,
    SET_SEARCH_VALUE,
    SET_LOADING_STATUS,
    SET_ERROR,
} = types.products

const initialState = {
    initialProducts:[],
    products:[],
    searchValue: '',
    isLoading: true,
    errorMessage: '',
}
export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_DATA:
            return {...state,initialProducts: action.payload}
        case SET_DATA:
            return {...state,products: action.payload}
        case SET_SEARCH_VALUE:
            return {...state,searchValue: action.payload}
        case SET_LOADING_STATUS:
            return {...state,isLoading: action.payload}
        case SET_ERROR:
            return {...state,errorMessage: action.payload}
        default: return state;
    }
}