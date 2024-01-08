import React from 'react';
import classes from './Navigation.module.sass';
import {useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = ({config}) => {
    const location = useLocation();
    return (
        <div className={classes.wrapper}>
            {Object.entries(config).map(([key, value], index) => {
                const {path,header} = value;
                const isActive = location.pathname === path ?classes.active :'';
                return (
                    <HashLink smooth
                        to={path} className={`${classes.link}
                        ${isActive}`} key={key+index}
                    >
                        {header}
                    </HashLink>
                )
            })}
        </div>
    );
};

export default Navigation;