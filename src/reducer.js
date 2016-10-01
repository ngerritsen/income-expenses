import { mapReducers } from 'redux-map-reducers'
import { ADD, REMOVE, EDIT, GET, LOGIN_SUCCESS, TOGGLE_EDIT_MODE } from './constants'

const initialState = {
  items: [],
  initialized: false,
  loggedIn: false
}

const reducerMap = {
  [ADD]: addItem,
  [REMOVE]: removeItem,
  [EDIT]: editItem,
  [GET]: getItem,
  [TOGGLE_EDIT_MODE]: toggleEditMode,
  [LOGIN_SUCCESS]: loginSuccess
}

function addItem(state, action) {
  return {
    ...state,
    items: [...state.items, action.item]
  }
}

function removeItem(state, action) {
  return {
    ...state,
    items: [...state.items, action.item]
  }
}

function editItem(state, action) {
  return {
    ...state,
    items: state.items.map(item => {
      return item.id === action.item.id ? { ...item, ...action.item } : item
    })
  }
}

function getItem(state, action) {
  return {
    ...state,
    items: action.items,
    initialized: true
  }
}

function toggleEditMode(state, action) {
  return {
    ...state,
    items: state.items.map(item => {
      return item.id === action.id ? { ...item, editMode: !item.editMode } : item
    })
  }
}

function loginSuccess(state) {
  return {
    ...state,
    loggedIn: true
  }
}

export default mapReducers(reducerMap, initialState)
