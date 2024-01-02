import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './AboutProduct.module.css';
import { resetSelectedProductAction } from '../../../store/productsSlice';

const AboutProduct = () => {
    // Сделать карусель, добавив много фотографий
    const dispatch = useDispatch();
    const product = useSelector(state => state.productsReducer.selectedProduct);
    const isEmptyProduct = !product || Object.keys(product).length === 0;

    const resetProduct = () => {
        dispatch(resetSelectedProductAction());
    };

    if (isEmptyProduct) return null;
    const {image, title, description, price} = product;

    return (
        <div className='container'>
            <div className={classes.overlay} onClick={resetProduct}></div>
            <div className={classes.popup}>
                <img src={image} alt="Product Image" className={classes.popup__image}/>
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Price: <b>${price}</b></p>
                </div>
            </div>
        </div>
    );
};

export default AboutProduct;
