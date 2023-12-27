import React from "react";

const Button = ({children,func,customClasses = ''}) => {
  return <button onClick={func} className={customClasses}>{children}</button>
};

export default Button;