import React from 'react';
import classes from './TooltopedImage.module.sass';
import {Tooltip} from "@mui/material";

const TooltipedImage  = ({title,placement = 'top',image,alt}) => {
    return(
        <Tooltip
            title={title}
            arrow
            placement={placement}
        >
            <img
                src={image}
                alt={alt || title || image}
                className={classes.image}
            />
        </Tooltip>
    );
};

export default TooltipedImage;