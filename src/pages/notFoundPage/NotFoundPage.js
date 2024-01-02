import React from 'react';
import Link from "../../compnents/universal/UI/link/Link";

const NotFoundPage = () => {
    return (
        <div className='container'>
            <h2>
                Упс!
                Такой страницы не существует. Перейти на <Link url='/' children='Главную'/>
            </h2>
        </div>
    );
};

export default NotFoundPage;