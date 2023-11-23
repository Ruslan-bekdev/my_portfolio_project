import React from "react";

const Image = ({src,alt,customClasses}) => {
    return (
        <div className={customClasses}>
            <img src={src} alt={alt}/>
        </div>
    )
}

export default Image;