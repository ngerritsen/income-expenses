/* eslint-disable no-console */

import { mapActionHandlers } from 'redux-map-action-handlers';

import * as itemsRepository from '../services/itemsRepository';
import * as constants from '../constants';
import * as actions from '../actions';

export default mapActionHandlers({
  [constants.GET_ALL_ITEMS]: getAllItems,
  [constants.ADD_ITEM]: addItem,
  [constants.EDIT_ITEM]: editItem,
  [constants.REMOVE_ITEM]: removeItem
});

async function getAllItems(store) {
  try {
    const items = await itemsRepository.getAll();
    store.dispatch(actions.getAllItemsSucceeded(items));
  } catch (error) {
    console.error(error);
    store.dispatch(actions.getAllItemsFailed());
  }
}

async function addItem(store, { id, item }) {
  try {
    await itemsRepository.add(id, { ...item, id });
    store.dispatch(actions.addItemSucceeded(id));
  } catch (error) {
    console.error(error);
    store.dispatch(actions.addItemFailed(id));
  }
}

async function editItem(store, { item }) {
  try {
    await itemsRepository.edit(item);
    store.dispatch(actions.editItemSucceeded(item.id));
  } catch (error) {
    console.error(error);
    store.dispatch(actions.editItemFailed(item.id));
  }
}

async function removeItem(store, { id }) {
  try {
    await itemsRepository.remove(id);
    store.dispatch(actions.removeItemSucceeded(id));
  } catch (error) {
    console.error(error);
    store.dispatch(actions.removeItemFailed(id));
  }
}
