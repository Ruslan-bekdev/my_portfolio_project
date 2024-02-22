import React from 'react';
import classes from './TooltopedImage.module.sass';
import {Tooltip} from "@mui/material";

const TooltipedImage  = ({title,placement = 'top',image,alt}) => {
    const isImageSkills = image.includes('https://skillicons.dev/icons?i=');
    const skillsCount = (image.match(/,/g) || []).length + 1;

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
                style={isImageSkills && {width: `${skillsCount * 40}px`}}
            />
        </Tooltip>
    );
};

export default TooltipedImage;