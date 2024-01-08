import React from 'react';
import classes from './MainPage.module.sass';
import Landing from "./sections/Landing";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contacts from "./sections/Contacts";
import Header from "../../compnents/specific/layout/header/Header";

const MainPage = () => {
    return (
        <div className={classes.main}>
            <Header/>
            <div className={classes.main__wrapper}>
                <Landing/>
                <About id='about'/>
                <Projects id='projects'/>
                <Contacts id='contacts'/>
            </div>
        </div>
    );
};

export default MainPage;