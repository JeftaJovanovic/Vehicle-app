import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'mobx-react';
import RootStore from './store/RootStore';

const rootStore = new RootStore();

ReactDOM.render(
    <Provider
        rootStore={rootStore}
        vehicleMakeStore={rootStore.vehicleMakeStore}
        vehicleModelStore={rootStore.vehicleModelStore}
    >
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
