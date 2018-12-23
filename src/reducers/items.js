import { mapReducers } from 'redux-map-reducers';
import * as constants from '../constants';

const initialState = {
  items: [],
  initialized: false
};

const reducerMap = {
  [constants.GET_ALL_ITEMS_SUCCEEDED]: getAllItemsSucceeded,
  [constants.ADD_ITEM]: addItem,
  [constants.ADD_ITEM_SUCCEEDED]: addItemSucceeded,
  [constants.ADD_ITEM_FAILED]: addItemFailed,
  [constants.REMOVE_ITEM]: removeItem,
  [constants.REMOVE_ITEM_SUCCEEDED]: removeItemSucceeded,
  [constants.REMOVE_ITEM_FAILED]: removeItemFailed,
  [constants.EDIT_ITEM]: editItem,
  [constants.EDIT_ITEM_SUCCEEDED]: editItemSucceeded,
  [constants.EDIT_ITEM_FAILED]: editItemFailed,
  [constants.MARK_ITEM_AS_PAYED]: markItemAsPayed,
  [constants.MARK_ITEM_AS_PAYED_SUCCEEDED]: markItemAsPayedSucceeded,
  [constants.MARK_ITEM_AS_PAYED_FAILED]: markItemAsPayedFailed,
  [constants.UNMARK_ITEM_AS_PAYED]: unmarkItemAsPayed,
  [constants.UNMARK_ITEM_AS_PAYED_SUCCEEDED]: unmarkItemAsPayedSucceeded,
  [constants.UNMARK_ITEM_AS_PAYED_FAILED]: unmarkItemAsPayedFailed,
  [constants.RESET_PAYMENTS]: resetPayments,
  [constants.RESET_PAYMENTS_SUCCEEDED]: resetPaymentsSucceeded,
  [constants.RESET_PAYMENTS_FAILED]: resetPaymentsFailed
};

function addItem(state, action) {
  return {
    ...state,
    items: [...state.items, markDirty({ ...action.item, id: action.id })]
  };
}

function getAllItemsSucceeded(state, action) {
  return {
    ...state,
    items: action.items,
    initialized: true
  };
}

function addItemSucceeded(state, action) {
  return updateItem(state, action.id, markClean);
}

function addItemFailed(state, action) {
  return removeItemById(state, action.id);
}

function removeItem(state, action) {
  return updateItem(state, action.id, markDirty);
}

function removeItemSucceeded(state, action) {
  return removeItemById(state, action.id);
}

function removeItemFailed(state, action) {
  return updateItem(state, action.id, markClean);
}

function editItem(state, action) {
  return updateItem(state, action.item.id, item => markDirty({
    ...item,
    ...action.item,
    _previousVersion: item
  }));
}

function editItemSucceeded(state, action) {
  return updateItem(state, action.id, markClean);
}

function editItemFailed(state, action) {
  return updateItem(state, action.id, item => markClean(item._previousVersion || item));
}

function markItemAsPayed(state, action) {
  return updateItem(state, action.id, item => markDirty(markAsPayed(item)));
}

function markItemAsPayedSucceeded(state, action) {
  return updateItem(state, action.id, markClean);
}

function markItemAsPayedFailed(state, action) {
  return updateItem(state, action.id, item => markClean(unmarkAsPayed(item)));
}

function unmarkItemAsPayed(state, action) {
  return updateItem(state, action.id, item => markDirty(unmarkAsPayed(item)));
}

function unmarkItemAsPayedSucceeded(state, action) {
  return updateItem(state, action.id, markClean);
}

function unmarkItemAsPayedFailed(state, action) {
  return updateItem(state, action.id, item => markClean(markAsPayed(item)));
}

function resetPayments(state, action) {
  return updateItemsWithResponsibility(state, action.responsible, item => markDirty(unmarkAsPayed({
    ...item,
    _wasPayed: Boolean(item.payed)
  })));
}

function resetPaymentsSucceeded(state, action) {
  return updateItemsWithResponsibility(state, action.responsible, markClean);
}

function resetPaymentsFailed(state, action) {
  return updateItemsWithResponsibility(state, action.responsible, item => markClean({
    ...item,
    payed: Boolean(item._wasPayed)
  }));
}

function updateItem(state, id, updater) {
  return updateItems(state, 'id', id, updater);
}

function updateItemsWithResponsibility(state, responsible, updater) {
  return updateItems(state, 'responsible', responsible, updater);
}

function updateItems(state, property, value, updater) {
  return {
    ...state,
    items: state.items.map(item => item[property] === value ? updater(item) : item)
  };
}

function removeItemById(state, id) {
  return {
    ...state,
    items: state.items.filter(item => item.id !== id)
  };
}

function markDirty(item) {
  return {
    ...item,
    dirty: true
  };
}

function markClean(item) {
  return {
    ...item,
    dirty: false
  };
}

function markAsPayed(item) {
  return {
    ...item,
    payed: true
  };
}

function unmarkAsPayed(item) {
  return {
    ...item,
    payed: false
  };
}

export default mapReducers(reducerMap, initialState);
