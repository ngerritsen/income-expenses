import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

export default createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
