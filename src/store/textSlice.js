import {createSlice} from "@reduxjs/toolkit";
import {
    texts_ru,
    texts_kg,
    texts_en,
    allTexts,
} from "../configs/texts";

const textSlice = createSlice({
    name: 'textSlice',
    initialState:{
        language: '',
        content: {},
    },
    reducers:{
        setLanguage_RU: (state) => {
            state.language = texts_ru.language;
            state.content = texts_ru.content;
        },
        setLanguage_KG: (state) => {
            state.language = texts_kg.language;
            state.content = texts_kg.content;
        },
        setLanguage_EN: (state) => {
            state.language = texts_en.language;
            state.content = texts_en.content;
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
    setLanguage_RU,
    setLanguage_KG,
    setLanguage_EN,
    setNextLanguage,
} = textSlice.actions;
export default textSlice.reducer;