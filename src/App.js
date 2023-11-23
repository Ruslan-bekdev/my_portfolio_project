import './App.css';
import {Route,Routes} from "react-router-dom";
import ProductPage from "./pages/productPage/ProductPage";
import CommentsPage from "./pages/commentsPage/CommentsPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Header from "./compnents/layout/header/Header";

const App = () => {
    return(
        <div className='App'>
            <Header/>
            <Routes>
                <Route path={'/'} element={'Home'}/>
                <Route path={'products'} element={<ProductPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
