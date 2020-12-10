import * as constants from './constants';
import shortid from 'shortid';

export const login = (email, password) => ({
  type: constants.LOGIN,
  email,
  password,
});
export const loginSucceeded = () => ({ type: constants.LOGIN_SUCCEEDED });
export const loginFailed = () => ({ type: constants.LOGIN_FAILED });

export const logout = () => ({ type: constants.LOGOUT });
export const logoutSucceeded = () => ({ type: constants.LOGOUT_SUCCEEDED });
export const logoutFailed = () => ({ type: constants.LOGOUT_FAILED });

export const getAllItems = () => ({ type: constants.GET_ALL_ITEMS });
export const getAllItemsSucceeded = (items) => ({
  type: constants.GET_ALL_ITEMS_SUCCEEDED,
  items,
});
export const getAllItemsFailed = () => ({
  type: constants.GET_ALL_ITEMS_FAILED,
});

export const addItem = (item) => ({
  type: constants.ADD_ITEM,
  item,
  id: shortid.generate(),
});
export const addItemSucceeded = (id) => ({
  type: constants.ADD_ITEM_SUCCEEDED,
  id,
});
export const addItemFailed = (id) => ({ type: constants.ADD_ITEM_FAILED, id });

export const removeItem = (id) => ({ type: constants.REMOVE_ITEM, id });
export const removeItemSucceeded = (id) => ({
  type: constants.REMOVE_ITEM_SUCCEEDED,
  id,
});
export const removeItemFailed = (id) => ({
  type: constants.REMOVE_ITEM_FAILED,
  id,
});

export const editItem = (item) => ({ type: constants.EDIT_ITEM, item });
export const editItemSucceeded = (id) => ({
  type: constants.EDIT_ITEM_SUCCEEDED,
  id,
});
export const editItemFailed = (id) => ({
  type: constants.EDIT_ITEM_FAILED,
  id,
});

export const openEditModal = (id, itemType, responsible) => ({
  type: constants.OPEN_EDIT_MODAL,
  itemType,
  responsible,
  id,
});

export const openAddModal = (itemType, responsible) => ({
  type: constants.OPEN_ADD_MODAL,
  itemType,
  responsible,
});

export const closeModal = () => ({ type: constants.CLOSE_MODAL });

export const activateDarkMode = () => ({ type: constants.ACTIVATE_DARK_MODE });
export const deactivateDarkMode = () => ({
  type: constants.DEACTIVATE_DARK_MODE,
});
