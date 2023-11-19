import React from "react";
import classes from "../ProductPage.module.css";

const Searcher = ({search,setSearch}) => {
    const handleInputChange = (e) =>{
        setSearch(e.target.value);
    }

    return(
        <div className={classes.searcher}>
            <input
                onChange={handleInputChange} value={search}
                type="text" name="name" id=""
            />
        </div>
    )

}

export default Searcher;