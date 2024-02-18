import './App.sass';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {pagesConfig} from "./configs/route";

function App() {
    const RenderRoutes = () => {
        return (
            <Routes>
                {Object.entries(pagesConfig).map(([key, value]) => {
                    const {path, element, child} = value;
                    return (
                        <Route
                            path={path}
                            element={element}
                            key={key}
                        >
                            {child &&
                                <Route
                                    path={child.path}
                                    element={child.element}
                                />
                            }
                        </Route>
                    );
                })}
            </Routes>
        );
    };

  return (
    <div className="App">
        <RenderRoutes/>
    </div>
  );
}

export default App;
