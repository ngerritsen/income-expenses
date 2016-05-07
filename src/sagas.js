import { take, put, call } from 'redux-saga/effects'

import firebaseRef from './firebase'
import { ADD, REMOVE, LOGIN } from './constants'
import { get, loginSuccess } from './actions'
import { objectToArray } from './helpers/utility'

export default function* rootSaga () {
  yield [
    initializeSaga(),
    addSaga(),
    removeSaga(),
    loginSaga()
  ]
}

function* initializeSaga () {
  const loginExpires = localStorage.getItem('loginExpires')
  const currentDate = new Date()
  const currentTime = currentDate.getTime()

  if (loginExpires && loginExpires < currentTime) {
    yield put(loginSuccess())
    yield call(getSaga)
  }
}

function* loginSaga () {
  while (true) {
    const { email, password } = yield take(LOGIN)

    yield call(login, email, password)
    yield put(loginSuccess())
    yield call(getSaga)
  }
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

function login (email, password) {
  return new Promise((resolve, reject) => {
    firebaseRef.authWithPassword({ email, password }, (error, data) => {
      if (error) {
        reject(error)
        return
      }

      resolve(data)
      localStorage.setItem('loginExpires', data.expires)
    })
  })
}

function getItems () {
  return new Promise ((resolve, reject) => {
    firebaseRef.child('items').once('value')
      .then(data => resolve(data))
      .catch(error => console.log(error))
  })
}
