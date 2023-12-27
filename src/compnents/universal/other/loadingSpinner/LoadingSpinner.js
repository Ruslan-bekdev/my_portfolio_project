import React from 'react';
import classes from './LoadingSpinner.module.css';
import {CircularProgress} from "@mui/material";

const LoadingSpinner = ({value = 'Загрузка...'}) => {
    return (
        <div className={`container ${classes.wrapper}`}>
            <CircularProgress size={24} className={classes.spinner}/>
            <p>{value}</p>
        </div>
    );
};

export default LoadingSpinner;