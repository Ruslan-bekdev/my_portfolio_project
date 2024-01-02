import React from 'react';
import {Link as RouterLink} from "react-router-dom";

const Link = ({url, children, customClasses = ''}) => {
    return (
        <RouterLink to={url} className={customClasses}>{children}</RouterLink>
    );
};

export default Link;
