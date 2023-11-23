import React from "react";

const Searcher = ({search,setSearch,customClasses}) => {
    const handleInputChange = (e) =>{
        setSearch(e.target.value);
    }

    return(
        <div className={customClasses}>
            <input
                onChange={handleInputChange} value={search}
                type="text" name="name" id=""
            />
        </div>
    )

}

export default Searcher;