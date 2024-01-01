import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./compnents/specific/layout/header/Header";
import Footer from "./compnents/specific/layout/footer/Footer";
import {
    MainPage,
    ProductPage,
    TodosPage,
    ClassPage,
    NotFoundPage,
} from './pages/index';

export const PATHS = {
    main:{
        path:'/',
        element:<MainPage/>,
        title:'Главная',
    },
    products:{
        path:'/products/',
        element:<ProductPage/>,
        title:'Products',
    },
    todos:{
        path:'/todos',
        element:<TodosPage/>,
        title:'Todos',
    },
    class:{
        path:'/class',
        element:<ClassPage/>,
        title:'Class',
    },
    notFound:{
        path:'*',
        element:<NotFoundPage/>,
        title:'',
    }
}

const RenderPages = () => {
    return <Routes>
        {
            Object.entries(PATHS).map(([key, value], index) => {
                const {path, element} = value;
                return <Route key={key} path={path} element={element}/>
            })
        }
    </Routes>
}

const App = () => {
    return(
        <div>
            <Header/>
            <div className='wrapper'>
                <RenderPages/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
