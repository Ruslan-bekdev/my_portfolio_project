import React, {useState} from 'react';
import classes from './ProductPage.module.css';
import Input from "../../compnents/universal/UI/input/Input";
import {ContentList} from "../../compnents/universal/other/contentList/ContentList";
import {useDataState} from "../../compnents/specific/functions/useDataState";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    setInitialProductsAction,
    setProductsAction,
    setProductsErrorAction,
    setProductsLoadingStatusAction,
    setProductsSearchValueAction,
} from "../../redux/actions/actions";

const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {initialProducts,products,searchValue,isLoading} = useSelector(state=>state.productsReducer);
    const [basked,setBasked] = useState([]);

    const handleSearch = (value) => {
        dispatch(setProductsSearchValueAction(value))
    }
    const showProduct = (product) => {
        navigate(`/products/${product.id}`);
    }
    const addToBasket = (product) => {
        const isItemBasked = basked.some(baskedItem => baskedItem === product);
        if (!isItemBasked){
            setBasked(prev => [...prev, product]);
        }
        console.log(basked);
    }

    const requestConfig = {
        requestParams:{
            url: 'https://fakestoreapi.com/products',
            options: {},
            method: 'axios',
        },
        actions:{
            setInitialDataAction: setInitialProductsAction,
            setDataAction: setProductsAction,
            setLoadingStatusAction: setProductsLoadingStatusAction,
            setErrorAction: setProductsErrorAction,
        },
        selectors:{
            initialData: initialProducts,
            searchValue: searchValue,
            isLoading: isLoading,
        },
        searchingKey: 'title',
        transformData: null,
    }
    const contentConfig = {
        data: products,
        notFoundMessage:'Товары не найдены',
        isLoading,
        // loadingValue: ,
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
            body: classes.itemList,
            item: classes.itemList__item,
            image: classes.item__image,
        }
    };

    useDataState(requestConfig,dispatch)

    return (
        <div className={`${classes.wrapper} container`}>
            <h1>Продукты</h1>
            <Outlet/>
            <Input
                value={searchValue}
                setValue={handleSearch}
                customClasses={classes.searcher}
            />
            <ContentList config={contentConfig}/>
        </div>
    );
};

export default ProductPage;
