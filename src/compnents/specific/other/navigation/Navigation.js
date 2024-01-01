import React from 'react';
import {NavLink,useLocation} from "react-router-dom";
import classes from './Navigation.module.css';

const Navigation = ({pageConfig}) => {
    const location = useLocation();
    return (
        <div className={classes.wrapper}>
            {
                Object.entries(pageConfig).map(([key, value], index) => {
                    const {path,title} = value;
                    const isActive = location.pathname === path ?classes.active :'';
                    return title &&
                        <NavLink
                            to={path}
                            className={`${classes.link} ${isActive}`}
                            key={`${key}${index}`}
                        >
                            {title}
                        </NavLink>
                })
            }
        </div>
    );
};

export default Navigation;