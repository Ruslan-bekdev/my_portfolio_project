import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.header__links}>
                    <a href="/">Главная</a>
                    <a href="/products">Products</a>
                    <a href="/comments">Comments</a>
                </div>
            </div>
        </header>
    );
};

export default Header;