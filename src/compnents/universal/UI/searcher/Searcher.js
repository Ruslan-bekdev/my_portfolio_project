import React from "react";

const Searcher = ({searchValue,setSearchValue,customClasses}) => {
    const handleInputChange = (e) =>{
        setSearchValue(e.target.value);
    }

    return(
        <div className={customClasses}>
            <input
                onChange={handleInputChange} value={searchValue}
                type="text" name="name" id=""
            />
        </div>
    )

}

export default Searcher;