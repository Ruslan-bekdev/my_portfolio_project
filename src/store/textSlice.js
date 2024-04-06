import {createSlice} from "@reduxjs/toolkit";
import allTexts from "../configs/texts";

const textSlice = createSlice({
    name: 'textSlice',
    initialState:{
        language: '',
        content: {},
    },
    reducers:{
        setDefaultLanguage: (state,action) => {
            state.language = action.payload.language;
            state.content = action.payload.content;
        },
        setNextLanguage: (state) => {
            const prevLangIndex = allTexts.findIndex(text => text.language === state.language);
            const nextLangIndex = (prevLangIndex + 1) % allTexts.length;

            state.language = allTexts[nextLangIndex].language;
            state.content = allTexts[nextLangIndex].content;
        },

    }
});

export const {
    setDefaultLanguage,
    setNextLanguage,
} = textSlice.actions;
export default textSlice.reducer;