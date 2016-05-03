import shortid from 'shortid'

import { ADD, REMOVE, EDIT } from './constants'

export function add (itemData) {
  const item = {
    itemData,
    id: shortid.generate()
  }

  return {
    type: ADD,
    item
  }
}

export function remove (id) {
  return {
    type: REMOVE,
    id
  }
}

export function edit (item) {
  return {
    type: EDIT,
    item
  }
}
