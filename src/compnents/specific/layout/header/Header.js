import React from 'react';
import classes from './Header.module.css';
import Navigation from "../../other/navigation/Navigation";
import {pagesConfig} from "../../../../App";

const Header = () => {

    return (
        <header className={classes.header}>
            <div className="container">
                <Navigation pageConfig={pagesConfig}/>
            </div>
        </header>
    );
};

export default Header;