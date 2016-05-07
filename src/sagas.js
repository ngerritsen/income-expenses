import { take, put, call } from 'redux-saga/effects'

import firebaseRef from './firebase'
import { ADD, REMOVE } from './constants'
import { get } from './actions'
import { objectToArray } from './helpers/utility'

export default function* rootSaga () {
  yield [
    addSaga(),
    removeSaga(),
    getSaga()
  ]
}

function* addSaga () {
  while (true) {
    const { item } = yield take(ADD)

    firebaseRef.child('items').child(item.id).set(item)
  }
}

function* removeSaga () {
  while (true) {
    const { id } = yield take(REMOVE)

    firebaseRef.child('items').child(id).remove()
  }
}

function* getSaga () {
  const data = yield call(getItems)
  const itemsObj = data.val()
  const items = itemsObj ? objectToArray(itemsObj) : []

  yield put(get(items))
}

function getItems () {
  return new Promise ((resolve, reject) => {
    firebaseRef.child('items').once('value', data => resolve(data))
  })
}
