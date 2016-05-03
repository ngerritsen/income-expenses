import { ADD, REMOVE, EDIT } from './constants'

export default function reducer (state = [], action) {
  switch (action.type) {
    case ADD:
      return [ ...state, action.item ]
    case REMOVE:
      return state.filter(({ id }) => id !== action.id)
    case EDIT:
      return state.map(item => {
        return item.id === action.item.id ? { item, ...action.item } : item
      })
    default:
      return state
  }
}
