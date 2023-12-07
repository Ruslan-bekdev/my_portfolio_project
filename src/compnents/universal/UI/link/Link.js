import React from 'react';
import {Link} from "react-router-dom";

const Link = ({url, children, customCLasses = ''}) => {
    return (
        <Link to={url} className={customCLasses}>{children}</Link>
    );
};

export default Link;