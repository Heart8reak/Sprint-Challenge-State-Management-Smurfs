import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import reducerSmurf from './reducers/reducerSmurf'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'


const store = createStore(reducerSmurf, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root"));
