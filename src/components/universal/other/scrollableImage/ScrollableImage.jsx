import React from 'react';
import classes from './ScrollableImage.module.sass';

const ScrollableImage = ({src = '#', alt = 'image', width = '', height = '', divClassName = '', imgClassName = ''}) => {

    return (
        <div style={{width: width, height: height}} className={`${classes.image_block} ${divClassName}`}>
            <img src={src} alt={alt} className={imgClassName}/>
        </div>
    );
};

export default ScrollableImage;
