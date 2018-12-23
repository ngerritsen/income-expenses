export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_SUCCEEDED = 'ADD_ITEM_SUCCEEDED';
export const ADD_ITEM_FAILED = 'ADD_ITEM_FAILED';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ITEM_SUCCEEDED = 'REMOVE_ITEM_SUCCEEDED';
export const REMOVE_ITEM_FAILED = 'REMOVE_ITEM_FAILED';

export const EDIT_ITEM = 'EDIT_ITEM';
export const EDIT_ITEM_SUCCEEDED = 'EDIT_ITEM_SUCCEEDED';
export const EDIT_ITEM_FAILED = 'EDIT_ITEM_FAILED';

export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const GET_ALL_ITEMS_SUCCEEDED = 'GET_ALL_ITEMS_SUCCEEDED';
export const GET_ALL_ITEMS_FAILED = 'GET_ALL_ITEMS_FAILED';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCEEDED = 'LOGOUT_SUCCEEDED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const MAN = 'man';
export const WOMAN = 'woman';
export const SHARED = 'shared';

export const INCOME = 'income';
export const EXPENSE = 'expense';
export const SALDO = 'saldo';

export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const MARK_ITEM_AS_PAYED = 'MARK_ITEM_AS_PAYED';
export const MARK_ITEM_AS_PAYED_SUCCEEDED = 'MARK_ITEM_AS_PAYED_SUCCEEDED';
export const MARK_ITEM_AS_PAYED_FAILED = 'MARK_ITEM_AS_PAYED_FAILED';

export const UNMARK_ITEM_AS_PAYED = 'UNMARK_ITEM_AS_PAYED';
export const UNMARK_ITEM_AS_PAYED_SUCCEEDED = 'UNMARK_ITEM_AS_PAYED_SUCCEEDED';
export const UNMARK_ITEM_AS_PAYED_FAILED = 'UNMARK_ITEM_AS_PAYED_FAILED';

export const RESET_PAYMENTS = 'RESET_PAYMENTS';
export const RESET_PAYMENTS_SUCCEEDED = 'RESET_PAYMENTS_SUCCEEDED';
export const RESET_PAYMENTS_FAILED = 'RESET_PAYMENTS_FAILED';

export const DEFAULT_CATEGORY = 'r1PSAfcSf';
export const CATEGORIES = [
  { id: DEFAULT_CATEGORY, name: 'Overige' },
  { id: 'BJePHCzqSG', name: 'Salaris' },
  { id: 'Skdr0zqSG', name: 'Belasting' },
  { id: 'HkgOr0G9HM', name: 'Huishoudelijk' },
  { id: 'S1Fr0z5Hz', name: 'Auto' },
  { id: 'S1eFHAfcBG', name: 'Huis' },
  { id: 'B1-2ZQqBz', name: 'Kids' },
  { id: 'f3fun3fs', name: 'Abbonementen' },
  { id: 'g4Dfd-23g', name: 'Verzekeringen' }
];

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBlbjTrwLB2HQN31t40jKxLxFB9-nFge_I",
  authDomain: "income-expense.firebaseapp.com",
  databaseURL: "https://income-expense.firebaseio.com",
  projectId: "firebase-income-expense",
  storageBucket: "firebase-income-expense.appspot.com",
  messagingSenderId: "177770040301"
};
