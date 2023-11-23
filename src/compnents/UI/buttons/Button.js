import React from "react";

const Button = ({children,fc,customClasses}) => {
  return <button onClick={fc} className={customClasses}>{children}</button>
};

export default Button;