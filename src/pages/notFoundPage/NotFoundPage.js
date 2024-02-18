import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className='container'>
            <h2>
                Упс! Такой страницы не существует. <br/>
                Перейти на <br/>
                <Link to='/'>Главную</Link>
            </h2>
        </div>
    );
};

export default NotFoundPage;