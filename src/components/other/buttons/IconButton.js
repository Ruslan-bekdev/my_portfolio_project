import React from 'react';
import classes from './Buttons.module.sass';

const IconButton = ({label, icon, isBefore = true, onClick, className = ''}) => {
    const beforeOrAfter = isBefore
        ?'before'
        :'after';

    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <button className={`${classes.icon_button} ${beforeOrAfter} ${className}`} onClick={handleClick}>
            {isBefore &&
                <img
                    src={icon}
                    alt="Before"
                />
            }
            {label &&
                <span>
                    {label}
                </span>
            }
            {!isBefore &&
                <img
                    src={icon}
                    alt="After"
                />
            }
        </button>
    );
};

export default IconButton;
