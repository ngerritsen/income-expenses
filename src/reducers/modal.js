import { mapReducers } from 'redux-map-reducers';
import { OPEN_ADD_MODAL, OPEN_EDIT_MODAL, CLOSE_MODAL } from '../constants';

const initialState = {
  isOpen: false,
  id: '',
  responsible: '',
  itemType: ''
};

const reducerMap = {
  [OPEN_ADD_MODAL]: openModal,
  [OPEN_EDIT_MODAL]: openModal,
  [CLOSE_MODAL]: closeModal
};

function openModal(state, action) {
  return {
    ...state,
    isOpen: true,
    id: action.id || '',
    responsible: action.responsible,
    itemType: action.itemType
  };
}

function closeModal() {
  return initialState;
}

export default mapReducers(reducerMap, initialState);
