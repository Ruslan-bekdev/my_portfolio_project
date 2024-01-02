import React from 'react';
import classes from './UsersPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useNavigate} from "react-router-dom";
import {useDataState} from "../../compnents/specific/functions/useDataState";
import TableContent from "../../compnents/universal/other/contentTable/ContentTable";
import AddUserForm from "../../compnents/specific/other/addUserForm/AddUserForm";
import {pagesConfig} from "../../App";
import {
    setInitialUsersAction,
    setUsersAction,
    setSelectedUserAction,
    setUsersLoadingStatusAction,
    setUsersErrorAction,
} from "../../store/usersSlice";

const UsersPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {initialUsers,users,isLoading} = useSelector(state => state.usersReducer)

    const showUser = (user) => {
        dispatch(setSelectedUserAction(user));
        navigate(pagesConfig.users.path + '/' + user.id);
    }
    const deleteKey = (data) => {
        return data.map(user => {
            const {company,website,...rest} = user;
            const {address:{suite,zipcode,geo,...restAddress},...other} = rest;
            return rest;
        })
    }

    const requestConfig = {
        requestParams:{
            url: 'https://jsonplaceholder.typicode.com/users',
            options:{},
            method: 'axios',
        },
        actions:{
            setInitialDataAction: setInitialUsersAction,
            setDataAction: setUsersAction,
            setLoadingStatusAction: setUsersLoadingStatusAction,
            setErrorAction: setUsersErrorAction,
        },
        selectors:{
            initialData: initialUsers,
            isLoading,
        },
        searchingKey: '',
        transformData: deleteKey,
    }
    const contentConfig = {
        data:users,
        notFoundMessage:'User\'s не найдены',
        isLoading,
        // loadingValue: ,
        mapper: {
            username: 'User:',
            email: 'Email:',
            id: 'id:'
        },
        functions: [
            {
                onClick: showUser,
                label: 'Подробнее',
                header: 'Actions',
            }
        ],
        classes: {
            body: '',
            item: '',
        }
    };

    useDataState(requestConfig,dispatch);

    return (
        <div className={`${classes.wrapper} container`}>
            <h1>Таблица пользователей</h1>
            <Outlet/>
            <AddUserForm/>
            <TableContent config={contentConfig}/>
        </div>
    );
};

export default UsersPage;