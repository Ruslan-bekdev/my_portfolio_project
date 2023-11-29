import './App.css';
import {Route,Routes} from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import TodosPage from "./pages/todosPage/TodosPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Header from "./compnents/specific/layout/header/Header";
import MainPage from "./pages/mainPage/MainPage";

const App = () => {
    return(
        <div className='App'>
            {/*надо разобраться со стилями, перенести часть*/}
            {/*к компонентам и так далее.*/}

            {/*нужно закончить функционал todoStatus*/}
            {/*сделать какой то ключ нового айтема как в контент или фанкшнс*/}
            {/*Если он есть, то айтем заменяется им.*/}
            {/*Также нужно исправить все названия, улучшить код*/}
            {/*и обьединить фанкшнс и контент. Кароче улучшить код*/}

            <Header/>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'products'} element={<ProductPage/>}/>
                <Route path={'comments'} element={<TodosPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
