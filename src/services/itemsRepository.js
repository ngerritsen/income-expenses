import firebase from 'firebase/app';

export async function getAll() {
  const data = [];
  const snapshots = await getItems().get();

  snapshots.forEach((snapshot) => data.push(snapshot.data()));

  return data;
}

export function add(id, item) {
  return getItems().doc(id).set(serializeItem(item));
}

export function remove(id) {
  return getItems().doc(id).delete();
}

export function edit(item) {
  return getItems().doc(item.id).update(serializeItem(item));
}

function getItems() {
  return firebase.firestore().collection('items');
}

function serializeItem(item) {
  return {
    amount: item.amount,
    category: item.category,
    id: item.id,
    itemType: item.itemType,
    responsible: item.responsible,
    title: item.title,
  };
}
