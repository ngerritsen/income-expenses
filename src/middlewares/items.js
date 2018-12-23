/* eslint-disable no-console */

import { mapActionHandlers } from 'redux-map-action-handlers';

import * as itemsRepository from '../services/itemsRepository';
import * as constants from '../constants';
import * as actions from '../actions';

export default mapActionHandlers({
  [constants.GET_ALL_ITEMS]: getAllItems,
  [constants.ADD_ITEM]: addItem,
  [constants.EDIT_ITEM]: editItem,
  [constants.REMOVE_ITEM]: removeItem,
  [constants.MARK_ITEM_AS_PAYED]: markItemAsPayed,
  [constants.UNMARK_ITEM_AS_PAYED]: unmarkItemAsPayed,
  [constants.RESET_PAYMENTS]: resetPayments
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

async function markItemAsPayed(store, { id }) {
  try {
    await itemsRepository.edit({ id, payed: true });
    store.dispatch(actions.markItemAsPayedSucceeded(id));
  } catch (error) {
    console.error(error);
    store.dispatch(actions.markItemAsPayedFailed(id));
  }
}

async function unmarkItemAsPayed(store, { id }) {
  try {
    await itemsRepository.edit({ id, payed: false });
    store.dispatch(actions.unmarkItemAsPayedSucceeded(id));
  } catch (error) {
    console.error(error);
    store.dispatch(actions.unmarkItemAsPayedFailed(id));
  }
}

async function resetPayments(store, { responsible }) {
  try {
    const itemsToUpdate = store.getState().items.items
      .filter(item => (
        item.responsible === responsible &&
        item.itemType === constants.EXPENSE &&
        item.payed === true
      ))
      .map(item => ({ ...item, payed: false }));

    await itemsRepository.editMultiple(itemsToUpdate);
    store.dispatch(actions.resetPaymentsSucceeded(responsible));
  } catch (error) {
    console.error(error);
    store.dispatch(actions.resetPaymentsFailed(responsible));
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
