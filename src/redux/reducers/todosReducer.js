import {types} from "../types";

const {
    SET_INITIAL_DATA,
    SET_DATA,
    SET_SEARCH_VALUE,
    SET_LOADING_STATUS,
    SET_ERROR,
} = types.todos

const initialState = {
    initialTodos:[],
    todos:[],
    searchValue: '',
    isLoading: true,
    errorMessage: '',
}
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIAL_DATA:
            return {...state,initialTodos: action.payload}
        case SET_DATA:
            return {...state,todos: action.payload}
        case SET_SEARCH_VALUE:
            return {...state,searchValue: action.payload}
        case SET_LOADING_STATUS:
            return {...state,isLoading: action.payload}
        case SET_ERROR:
            return {...state,errorMessage: action.payload}
        default: return state;
    }
}