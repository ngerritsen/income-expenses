import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authenticationReducer from './authentication';
import itemsReducer from './items';
import modalReducer from './modal';

export default combineReducers({
  form: formReducer,
  authentication: authenticationReducer,
  items: itemsReducer,
  modal: modalReducer
});
