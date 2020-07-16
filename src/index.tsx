import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {configure} from "mobx";
import {Store} from "./store/store";
import StoreContext from "./store/storeContext"

// Не допускать изменения состояния вне действий
configure({enforceActions: "observed"})

ReactDOM.render(
    <StrictMode>
        <StoreContext.Provider value={new Store}>
            <App/>
        </StoreContext.Provider>
    </StrictMode>,
    document.getElementById("root")
);