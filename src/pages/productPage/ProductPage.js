import React, {useEffect, useState} from "react";
import {fetchRequest} from "../../compnents/functions/fetchRequest/fetchRequest";
import Searcher from "../../compnents/UI/searcher/Searcher";
import Card from "./card/Card";
import classes from "./ProductPage.module.css";

const ProductList = ({products}) => (
    <div className={classes.itemList}>
        {products.length
            ? products.map((item, index) => <Card item={item} key={index + 1}/>)
            : <p>Товары не найдены</p>}
    </div>
)

const ProductPage = () => {
    const [products,setProducts] = useState([]);
    const [searchInput,setSearchInput] = useState('');
    const [fetchError,setFetchError] = useState('');

    const modifyData = ({data,key,value}) => {
        return data.map((item) => ({...item,[key]:value}))
    }
    const getFilteredData = () => {
        return products.filter((item) => item.title.includes(searchInput.trim()));
    }

    useEffect(()=>{
        fetchRequest('https://fakestoreapi.com/products')
            .then(({status,data,error})=>{
                if (status !== 200) return setFetchError(error);
                const modifiedData = modifyData({data,key: 'count',value: 1})
                setProducts(modifiedData);
            })
            .catch(error => {
                setFetchError(error);
            })
    },[]);

    return (
        <div className={`${classes.wrapper} container`}>
            <Searcher search={searchInput} setSearch={setSearchInput} customClasses={classes.searcher}/>
            <ProductList products={getFilteredData()}/>
        </div>
    );
}

export default ProductPage;