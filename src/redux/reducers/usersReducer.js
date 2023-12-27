import {types} from "../types";

const initialState = {
    initialUsers: [],
    users: [],
    isLoading: [],
    errorMessage: '',
}
export const usersReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.users.SET_INITIAL_DATA:
            return {...state,initialUsers: action.payload}
        case types.users.SET_DATA:
            return {...state,users: action.payload}
        case types.users.SET_LOADING_STATUS:
            return {...state,isLoading: action.payload}
        case types.users.SET_ERROR:
            return {...state,errorMessage: action.payload}
        default: return state;
    }
}