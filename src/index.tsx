import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { configure } from 'mobx';
import 'mobx-react/batchingForReactDom';
import { StoreProvider } from './store/store';

configure({ enforceActions: 'observed' });

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);
