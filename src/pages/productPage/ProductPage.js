import React, {useState} from 'react';
import {useDataState} from "../../compnents/specific/functions/useDataState";
import Searcher from "../../compnents/universal/UI/searcher/Searcher";
import classes from './ProductPage.module.css';
import {ContentList} from "../../compnents/universal/other/contentList/ContentList";
import {Outlet, useNavigate} from "react-router-dom";

const ProductPage = () => {
    const {searchValue, setSearchValue, isLoading, data} = useDataState(
        'https://fakestoreapi.com/products',
        'title',
        data => data
    );

    const [basked,setBasked] = useState([]);

    const addToBasket = (item) => {
        const isItemBasked = basked.some(baskedItem => baskedItem === item);
        if (!isItemBasked){
            setBasked(prev => [...prev, item]);
        }
    }
    const navigate = useNavigate();
    const showProduct = (item) => {
        navigate(`/products/${item.id}`);
    }

    const contentConfig = {
        notFoundMessage:'Товары не найдены',
        mapper:{
            image: '',
            title: 'Name:',
            price: 'Price:'
        },
        functions: [
            {
                onClick: addToBasket,
                label: '+',
                className: ''
            },
            {
                onClick: showProduct,
                label: 'show',
                className: ''
            }
        ],
        classes: {
            item: classes.itemList__item,
        }
    };

    return (
        <div className={`${classes.wrapper} container`}>
            <Outlet/>
            <Searcher
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                customClasses={classes.searcher}
            />

            <ContentList
                data={data}
                contentConfig={contentConfig}
                isLoading={isLoading}
                customClasses={classes.itemList}
            />
        </div>
    );
};

export default ProductPage;
