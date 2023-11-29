import React from "react";

const Image = ({src,alt,customClasses = ''}) => {
    return (
        <div className={customClasses}>
            <img src={src} alt={alt} className='imageDefault'/>
        </div>
    )
}

export default Image;