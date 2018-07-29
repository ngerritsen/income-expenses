import firebase from 'firebase/app';

import { objectToArray } from '../helpers/utility';

export async function getAll() {
  const data = (await getItemsRef().once('value')).val();

  return data ? objectToArray(data) : [];
}

export function add(id, item) {
  return getItemsRef().child(id).set(item);
}

export function remove(id) {
  return getItemsRef().child(id).remove();
}

export function edit(item) {
  return getItemsRef().child(item.id).update(item);
}

function getItemsRef() {
  return firebase.database().ref('items');
}
