import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState:{
        initialTodos:[],
        todos:[],
        searchValue: '',
        isLoading: true,
        errorMessage: '',
    },
    reducers: {
        setInitialTodosAction: (state,action) => {
            state.initialTodos = action.payload;
        },
        setTodosAction: (state,action) => {
            state.todos = action.payload;
        },
        setTodosSearchValueAction: (state,action) => {
            state.searchValue = action.payload;
        },
        setTodosLoadingStatusAction: (state,action) => {
            state.isLoading = action.payload;
        },
        setTodosErrorAction:(state,action) => {
            state.errorMessage = action.payload;
        },
    },
});

export const {
    setInitialTodosAction,
    setTodosAction,
    setTodosSearchValueAction,
    setTodosLoadingStatusAction,
    setTodosErrorAction,
} = todosSlice.actions;

export default todosSlice.reducer;