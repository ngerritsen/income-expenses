import shortid from 'shortid';

import * as constants from './constants';

export function login(email, password) {
  return {
    type: constants.LOGIN,
    email,
    password
  };
}

export function loginSuccess() {
  return {
    type: constants.LOGIN_SUCCESS
  };
}

export function add(item) {
  const id = shortid.generate();
  return {
    type: constants.ADD,
    item: {
      ...item,
      id
    },
    id
  };
}

export function remove(id) {
  return {
    type: constants.REMOVE,
    id
  };
}

export function edit(item) {
  return {
    type: constants.EDIT,
    item
  };
}

export function openEditModal(id, itemType, responsible) {
  return {
    type: constants.OPEN_EDIT_MODAL,
    itemType,
    responsible,
    id
  };
}

export function openAddModal(itemType, responsible) {
  return {
    type: constants.OPEN_ADD_MODAL,
    itemType,
    responsible
  };
}

export function closeModal() {
  return {
    type: constants.CLOSE_MODAL
  };
}

export function get(items) {
  return {
    type: constants.GET,
    items
  };
}
