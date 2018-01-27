import { mapReducers } from 'redux-map-reducers';
import { ADD, REMOVE, EDIT, GET } from '../constants';

const initialState = {
  items: [],
  initialized: false
};

const reducerMap = {
  [ADD]: addItem,
  [REMOVE]: removeItem,
  [EDIT]: editItem,
  [GET]: getItem
};

function addItem(state, action) {
  return {
    ...state,
    items: [...state.items, { ...action.item, dirty: true }]
  };
}

function removeItem(state, action) {
  return {
    ...state,
    items: updateItem(state.items, action.item.id, item => ({
      ...item,
      dirty: true
    }))
  };
}

function editItem(state, action) {
  return {
    ...state,
    items: updateItem(state.items, action.item.id, item => ({
      ...item,
      ...action.item,
      dirty: true
    }))
  };
}

function getItem(state, action) {
  return {
    ...state,
    items: action.items,
    initialized: true
  };
}

function updateItem(items, id, updater) {
  return items.map(item => item.id === id ? updater(item) : item);
}

export default mapReducers(reducerMap, initialState);
