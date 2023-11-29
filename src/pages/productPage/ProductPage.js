import React, {useState} from 'react';
import {useDataState} from "../../compnents/specific/functions/useDataState";
import Searcher from "../../compnents/universal/UI/searcher/Searcher";
import classes from './ProductPage.module.css';
import {ContentList} from "../../compnents/universal/other/contentList/ContentList";

const ProductPage = () => {
    const {searchInput, setSearchInput, loadingStatus, data} = useDataState(
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

    const contentConfig = {
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
            }
        ],
        classes: {
            list: classes.itemList,
            item: classes.itemList__item,
        }
    };

    return (
        <div className={`${classes.wrapper} container`}>
            <Searcher
                search={searchInput}
                setSearch={setSearchInput}
                customClasses={classes.searcher}
            />

            <ContentList
                data={data}
                contentConfig={contentConfig}
                loading={loadingStatus}
                customClasses={classes.itemList}
                contentType={'products'}
            />
        </div>
    );
};

export default ProductPage;
