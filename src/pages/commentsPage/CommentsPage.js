import React, {useEffect, useState} from "react";
import {fetchRequest} from "../../compnents/functions/fetchRequest/fetchRequest";
import Searcher from "../../compnents/UI/searcher/Searcher";
import Card from "./card/Card";
import classes from "./CommentsPage.module.css";

const ItemList = ({items}) => (
    <div className={classes.itemList}>
        {items.length
            ? items.map((item, index) => <Card item={item} key={index + 1}/>)
            : <p>Товары не найдены</p>}
    </div>
)

const CommentsPage = () => {
    const [data,setData] = useState([]);
    const [searchInput,setSearchInput] = useState('');
    const [fetchError,setFetchError] = useState('');

    useEffect(()=>{
        fetchRequest('https://jsonplaceholder.typicode.com/comments')
            .then(({status,data,error}) => {
                if (status !== 200) return setFetchError(error);

                setData(data.slice(0,50));
            })
            .catch(error => {
                setFetchError(error);
            })
    },[]);

    const getFilteredData = () => {
        return data.filter((item) => item.name.includes(searchInput.trim()));
    }

    return(
        <div className={`${classes.wrapper} container`}>
            <Searcher search={searchInput} setSearch={setSearchInput} customClasses={classes.searcher}/>
            <ItemList items={getFilteredData()}/>
        </div>
    )
}

export default CommentsPage;