import React, {createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {configure} from "mobx";
import {store} from "./store/store";
import StoreContext from "./store/storeContext"

// Не допускать изменения состояния вне действий
configure({enforceActions: "observed"})

ReactDOM.render(
    <StrictMode>
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    </StrictMode>,
    document.getElementById("root")
);