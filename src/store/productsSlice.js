import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState:{
        initialProducts:[],
        products:[],
        basked: [],
        selectedProduct: {},
        searchValue: '',
        isLoading: true,
        errorMessage: '',
    },
    reducers: {
        setInitialProductsAction: (state,action) => {
            state.initialProducts = action.payload;
        },
        setProductsAction: (state,action) => {
            state.products = action.payload;
        },
        addProductToBuskedAction: (state,action) => {
            state.basked = [...state.basked,action.payload];
        },
        setSelectedProductAction: (state,action) => {
            console.log(action.payload)
            state.selectedProduct = action.payload;
        },
        resetSelectedProductAction: (state,action) => {
            state.selectedProduct = {};
        },
        setProductsSearchValueAction: (state,action) => {
            state.searchValue = action.payload;
        },
        setProductsLoadingStatusAction: (state,action) => {
            state.isLoading = action.payload;
        },
        setProductsErrorAction:(state,action) => {
            state.errorMessage = action.payload;
        },
    },
});

export const {
    setInitialProductsAction,
    setProductsAction,
    addProductToBuskedAction,
    setSelectedProductAction,
    resetSelectedProductAction,
    setProductsSearchValueAction,
    setProductsLoadingStatusAction,
    setProductsErrorAction,
} = productsSlice.actions;

export default productsSlice.reducer;