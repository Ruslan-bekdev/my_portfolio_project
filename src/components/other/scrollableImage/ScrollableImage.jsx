import React from 'react';
import classes from './ScrollableImage.module.sass';

const ScrollableImage = ({src = '#', alt = 'image', className = ''}) => {

    return (
        <div
            className={`${classes.image_block} ${className}`}
        >
            <img
                src={src}
                alt={alt}
            />
        </div>
    );
};

export default ScrollableImage;
