import React from 'react';
import classes from './Header.module.sass';
import Navigation from "../../other/navigation/Navigation";
import {anchorsConfig} from "../../../../pages/index";

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={`${classes.header__content}`}>
                <h3>Руслан</h3>
                <Navigation config={anchorsConfig}/>
            </div>
        </header>
    );
};

export default Header;