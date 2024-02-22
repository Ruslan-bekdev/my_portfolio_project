import './App.sass';
import React from "react";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
