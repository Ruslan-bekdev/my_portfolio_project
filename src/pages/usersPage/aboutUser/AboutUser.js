import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './AboutUser.module.css';
import { resetSelectedUserAction } from '../../../store/usersSlice';

const AboutUser = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.usersReducer.selectedUser);
    const isEmptyUser = !user || Object.keys(user).length === 0;

    const resetUser = () => {
        dispatch(resetSelectedUserAction());
    };


    if (isEmptyUser) return null;
    const {name, username, email, phone, id, address} = user;
    const {street, city} = address;

    return (
        <div className='container'>
            <div className={classes.overlay} onClick={resetUser}></div>
            <div className={classes.popup}>
                <h2>{name}</h2>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>ID: {id}</p>
                <div>
                    <b>Address:</b>
                    <p>Street: {street}</p>
                    <p>City: {city}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUser;
