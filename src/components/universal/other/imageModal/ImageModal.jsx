import React, { useState } from 'react';
import classes from './ImageModal.module.sass';

const ImageModal = ({src, alt, className = ''}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.modal}>
            <img src={src} alt={alt} onClick={handleOpen} className={className}/>
            {open&&<div onClick={handleClose} className={classes.overlay}>
                <div className={classes.modal__image}>
                    <img src={src} alt={alt}/>
                </div>
            </div>}
        </div>
    );
};

export default ImageModal;