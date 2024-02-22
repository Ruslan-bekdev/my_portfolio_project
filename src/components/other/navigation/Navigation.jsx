import React from 'react';
import classes from './Navigation.module.sass';
import {useLocation} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Navigation = ({config, text}) => {
    const location = useLocation();
    return (
        <div className={classes.wrapper}>
            {Object.entries(config).map(([key, value]) => {
                const isActive = location.pathname === value
                    ?classes.active :'';

                return (
                    <HashLink
                        smooth
                        to={value}
                        className={`${classes.link}
                        ${isActive}`}
                        key={key}
                    >
                        {text[key]}
                    </HashLink>
                )
            })}
        </div>
    );
};

export default Navigation;