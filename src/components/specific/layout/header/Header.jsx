import React from 'react';
import classes from './Header.module.sass';
import Navigation from "../../other/navigation/Navigation";
import {anchorsConfig} from "../../../../configs/route";

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={`${classes.header__content}`}>
                <h3>Руслан</h3>
                <Navigation config={anchorsConfig.main}/>
            </div>
        </header>
    );
};

export default Header;