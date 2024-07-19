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
    NotFoundPage,

    AboutUser,
    AboutProduct,
} from './pages/index';
import Sandbox from "./pages/sandbox/Sandbox";

export const pagesConfig = {
    main:{
        path:'/',
        element:<MainPage/>,
        title:'Main',
    },
    products:{
        path:'/products',
        element:<ProductPage/>,
        title:'Products',
        child: {
            path: ':id',
            element: <AboutProduct/>
        },
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
        child: {
            path: ':id',
            element: <AboutUser/>,
        },
    },
    sandbox: {
        path: '/sandbox',
        element: <Sandbox/>,
        title: 'Sandbox',
    },
    notFound:{
        path:'*',
        element:<NotFoundPage/>,
        title:'',
    }
}

const RenderRoutes = () => {
    return (
        <Routes>
            {Object.entries(pagesConfig).map(([key, value]) => {
                const { path, element, child } = value;
                return (
                    <Route key={key} path={path} element={element}>
                        {child && <Route path={child.path} element={child.element} />}
                    </Route>
                );
            })}
        </Routes>
    );
};

const App = () => {
    return(
        <div>
            <Header/>
            <div className='wrapper'>
                <RenderRoutes/>
            </div>
            <Footer/>
        </div>
    )
}

export default App;
