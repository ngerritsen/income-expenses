import { mapReducers } from 'redux-map-reducers';
import * as constants from '../constants';

const initialState = {
  isOpen: false,
  id: '',
  responsible: '',
  itemType: '',
};

const reducerMap = {
  [constants.OPEN_ADD_MODAL]: openModal,
  [constants.OPEN_EDIT_MODAL]: openModal,
  [constants.CLOSE_MODAL]: closeModal,
};

function openModal(state, action) {
  return {
    ...state,
    isOpen: true,
    id: action.id || '',
    responsible: action.responsible,
    itemType: action.itemType,
    category: action.category,
  };
}

function closeModal() {
  return initialState;
}

export default mapReducers(reducerMap, initialState);
