import classes from "./ProductPage.module.css";
import Card from "./card/Card";
import Searcher from "./searcher/Searcher";
import {useEffect, useState} from "react";

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
    // https://jsonplaceholder.typicode.com.posts
    // https://fakestoreapi.com/products
    const fetchData = async (url) => {
        const response = await fetch(url);
        return response.json();
    }

    const modifyData = ({data,key,value}) => {
        return  data.map((item) => ({...item,[key]:value}))
    }

    useEffect(()=>{
        const getData = async () => {
            const data = await fetchData('https://fakestoreapi.com/products');
            const modifiedData = modifyData({data,key: 'count',value: 1})
            setProducts(modifiedData);
        }
        getData();
    },[]);

    const getFilteredProducts = () => {
        return products.filter((item) => item.title.includes(searchInput.trim()));
    }

    return (
        <div className={classes.wrapper}>
            <Searcher search={searchInput} setSearch={setSearchInput}/>
            <ProductList products={getFilteredProducts()}/>
        </div>
    );
}

export default ProductPage;