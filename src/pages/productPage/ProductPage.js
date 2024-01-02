import React from 'react';
import classes from './ProductPage.module.css';
import Input from "../../compnents/universal/UI/input/Input";
import {ContentList} from "../../compnents/universal/other/contentList/ContentList";
import {useDataState} from "../../compnents/specific/functions/useDataState";
import {Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {pagesConfig} from "../../App";
import {
    setInitialProductsAction,
    setProductsAction,
    setSelectedProductAction,
    setProductsErrorAction,
    addProductToBuskedAction,
    setProductsLoadingStatusAction,
    setProductsSearchValueAction,
} from "../../store/productsSlice";

const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {initialProducts,products,basked,searchValue,isLoading} = useSelector(state=>state.productsReducer);

    const handleSearch = (value) => {
        dispatch(setProductsSearchValueAction(value));
    };
    const selectProduct = (product) => {
        dispatch(setSelectedProductAction(product));
        navigate(pagesConfig.products.path + '/' + product.id);
    };
    const addToBasket = (product) => {
        const isItemBasked = basked.some(baskedItem => baskedItem.id === product.id);
        if (!isItemBasked)
            dispatch(addProductToBuskedAction(product));
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
                onClick: selectProduct,
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
            <Input
                value={searchValue}
                placeholder='Поиск'
                setValue={handleSearch}
                customClasses={classes.searcher}
            />
            <div>
                <p>Корзина({basked.length})</p>
            </div>
            <ContentList config={contentConfig}/>
            <Outlet/>
        </div>
    );
};

export default ProductPage;