import 'babel-polyfill';

import './firebase';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App';
import { setGlobalStyling } from './helpers/theme';

setGlobalStyling();

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
