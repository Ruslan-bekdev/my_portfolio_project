import React, { useState } from 'react';
import classes from './ZoomableImage.module.sass';

const ZoomableImage = ({src, alt, className = ''}) => {
    const [zoomed, setZoomed] = useState(false);

    const handleZoomToggle = () => {
        setZoomed(!zoomed);
    };

    return (
        <div
            className={classes.modal}
            onClick={handleZoomToggle}
        >
            <img
                src={src}
                alt={alt}
                className={`${className} ${classes.image}`}
            />
            {zoomed &&
                <div
                    onClick={handleZoomToggle}
                    className={classes.overlay}
                >
                    <div
                        className={classes.modal__image}
                    >
                        <img
                            src={src}
                            alt={alt}
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default ZoomableImage;