import React, {useState} from "react";

const Input = ({value,setValue,placeholder = '',customClasses = '',type = 'text',name = 'name' }) => {
    const handleInputChange = (e) => {
        setValue && setValue(e.target.value);
    }

    return (
        <div className={customClasses}>
            <input
                onChange={handleInputChange}
                value={value}
                placeholder={placeholder}
                type={type}
                name={name}
            />
        </div>
    );
};

export default Input;