import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState:{
        initialUsers:[],
        users:[],
        selectedUsers: {},
        isLoading: true,
        errorMessage: '',
    },
    reducers: {
        setInitialUsersAction: (state,action) => {
            state.initialUsers = action.payload;
        },
        setUsersAction: (state,action) => {
            state.users = action.payload;
        },
        setSelectedUserAction: (state,action) => {
            state.selectedUser = action.payload;
        },
        resetSelectedUserAction: (state,action) => {
            state.selectedUser = {};
        },
        addUserAction: (state,action) => {
            state.initialUsers = [...state.initialUsers,action.payload];
        },
        setUsersLoadingStatusAction: (state,action) => {
            state.isLoading = action.payload;
        },
        setUsersErrorAction:(state,action) => {
            state.errorMessage = action.payload;
        },
    },
});

export const {
    setInitialUsersAction,
    setUsersAction,
    setSelectedUserAction,
    resetSelectedUserAction,
    addUserAction,
    setUsersLoadingStatusAction,
    setUsersErrorAction,
} = usersSlice.actions;

export default usersSlice.reducer;