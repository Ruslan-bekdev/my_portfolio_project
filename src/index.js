import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {thunk} from "redux-thunk";
import {rootReducer} from "./redux/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk,logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);