import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import userReducer from './reducers/userReducer.js'

import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'

let storeObj = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={storeObj}>    
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));