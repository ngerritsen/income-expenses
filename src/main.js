import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, injectGlobal } from 'styled-components';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import theme from './theme';
import store from './store';
import App from './components/App';

const rootEl = document.getElementById('root');

injectGlobal`
  html {
    font-size: 62.5%;
  }

  body {
    color: ${theme.colors.foreground};
    font-size: 1.5rem;
    margin: 0;
    background-color: ${theme.colors.background};
    font-family: 'Open Sans', Arial, sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </Provider>,
  rootEl
);
