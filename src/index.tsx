import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import {configure} from "mobx";
import {RootStore} from "./stores/rootStore";
import StoreContext from "./stores/storeContext";
import 'mobx-react/batchingForReactDom';

configure({enforceActions: "observed"})

ReactDOM.render(
    <StrictMode>
        <StoreContext.Provider value={{...new RootStore()}}>
            <App/>
        </StoreContext.Provider>
    </StrictMode>,
    document.getElementById("root")
);