import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./compnents/specific/layout/header/Header";
import Footer from "./compnents/specific/layout/footer/Footer";
import {
    MainPage,
    ProductPage,
    TodosPage,
    UsersPage,
    AddUserPage,
    ClassPage,
    NotFoundPage,
} from './pages/index';

export const pagesConfig = {
    main:{
        path:'/',
        element:<MainPage/>,
        title:'Main',
    },
    products:{
        path:'/products/',
        element:<ProductPage/>,
        title:'Products',
    },
    todos: {
        path: '/todos',
        element: <TodosPage/>,
        title: 'Todos',
    },
    users: {
        path: '/users',
        element: <UsersPage/>,
        title: 'Users',
    },
    addUser: {
        path: '/addUser',
        element: <AddUserPage/>,
        title: 'Add user',
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
            Object.entries(pagesConfig).map(([key, value], index) => {
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
