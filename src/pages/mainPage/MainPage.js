import React from 'react';
import classes from './MainPage.module.sass';
import Landing from "./sections/landing";

const MainPage = () => {
    return (
        <div className={classes.main}>
            <Landing/>
        </div>
    );
};

export default MainPage;