import React from 'react';
import classes from './Navigation.module.sass';
import {NavLink,useLocation} from "react-router-dom";

const Navigation = ({config}) => {
    const location = useLocation();
    return (
        <div className={classes.wrapper}>
            {Object.entries(config).map(([key, value], index) => {
                const {path,header} = value;
                const isActive = location.pathname === path ?classes.active :'';
                return (
                    <NavLink
                        to={path} className={`${classes.link}
                        ${isActive}`} key={key+index}
                    >
                        {header}
                    </NavLink>
                )
            })}
        </div>
    );
};

export default Navigation;