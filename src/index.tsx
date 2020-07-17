import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {configure} from "mobx";
import {UserStore} from "./stores/userStore";
import StoreContext from "./stores/storeContext"
import {RootStore} from "./stores/rootStore";

// Не допускать изменения состояния вне действий
configure({enforceActions: "observed"})

ReactDOM.render(
    <StrictMode>
        <StoreContext.Provider value={new RootStore()}>
            <App/>
        </StoreContext.Provider>
    </StrictMode>,
    document.getElementById("root")
);