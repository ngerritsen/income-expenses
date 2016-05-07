import { ADD, REMOVE, EDIT, GET } from './constants'

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
    case GET:
      return action.items
    default:
      return state
  }
}
