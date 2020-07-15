import React, {createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {configure} from "mobx";
import store from "./store/store";

// Не допускать изменения состояния вне действий
configure({enforceActions: "observed"})

export const StoreContext = createContext(null)

ReactDOM.render(
    <StrictMode>
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    </StrictMode>,
    document.getElementById("root")
);