import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/app'

import './styles/global.scss'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootEl
)
