import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import loggedReducer from './redux/isLogged';
import { allReducers } from './redux/reducers';

import App from './App';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
