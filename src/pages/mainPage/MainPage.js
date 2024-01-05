import React from 'react';
import classes from './MainPage.module.sass';
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";

const MainPage = () => {
    return (
        <div className={classes.main}>
            <Landing/>
            <Projects/>
        </div>
    );
};

export default MainPage;