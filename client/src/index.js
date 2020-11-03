import React from 'react'
import ReactDom from 'react-dom';

import {Provider} from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import App from './component/App';

//materialize import CSS
import 'materialize-css/dist/css/materialize.min.css';

//test post survey and send mails
import axios from 'axios';
window.axios = axios;


//creation du store
const store = createStore(reducers,{},applyMiddleware(reduxThunk))

ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>,

    document.querySelector('#root')
);

console.log('Stripe from env variable : ',process.env.REACT_APP_STRIPE_KEY)
console.log('Environement is : ',process.env.NODE_ENV);

