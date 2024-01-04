import './App.sass';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {pagesConfig} from "./pages";
import Header from "./compnents/specific/layout/header/Header";

function App() {
    const RenderRoutes = () => {
        return (
            <Routes>
                {Object.entries(pagesConfig).map(([key, value]) => {
                    const {path, element, child} = value;
                    return (
                        <Route key={key} path={path} element={element}>
                            {child && <Route path={child.path} element={child.element} />}
                        </Route>
                    );
                })}
            </Routes>
        );
    };

  return (
    <div className="App">
        <Header/>
        <div className="content">
            <RenderRoutes/>
        </div>
    </div>
  );
}

export default App;
