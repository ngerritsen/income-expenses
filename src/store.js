import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import authenticationMiddleware from './middlewares/authentication';
import itemsMiddleware from './middlewares/items';
import themeMiddleware from './middlewares/theme';
import reducer from './reducers';

const middlewares = [
  authenticationMiddleware,
  itemsMiddleware,
  themeMiddleware,
];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default createStore(reducer, applyMiddleware(...middlewares));
