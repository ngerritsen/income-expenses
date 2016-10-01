import shortid from 'shortid'

import { ADD, REMOVE, EDIT, GET, LOGIN, LOGIN_SUCCESS, TOGGLE_EDIT_MODE } from './constants'

export function login(email, password) {
  return {
    type: LOGIN,
    email,
    password
  }
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  }
}

export function add(itemData) {
  const item = {
    ...itemData,
    id: shortid.generate()
  }

  return {
    type: ADD,
    item
  }
}

export function remove(id) {
  return {
    type: REMOVE,
    id
  }
}

export function edit(id, item) {
  return {
    type: EDIT,
    item,
    id
  }
}

export function toggleEditMode(id) {
  return {
    type: TOGGLE_EDIT_MODE,
    id
  }
}

export function get(items) {
  return {
    type: GET,
    items
  }
}
