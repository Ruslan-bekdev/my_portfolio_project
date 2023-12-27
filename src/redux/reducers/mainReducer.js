import {types} from "../types";

const initialState = {
    text: 'Обычный текст',
}
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_TEXT:
            return {...state, text: 'Новый текст'}
        default: return state;
    }
};