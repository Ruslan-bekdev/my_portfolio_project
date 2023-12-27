import {combineReducers} from "redux";
import {mainReducer} from "./mainReducer";
import {todosReducer} from "./todosReducer";
import {productsReducer} from "./productsReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    textReducer: mainReducer,
    todosReducer,
    productsReducer,
    usersReducer,
});