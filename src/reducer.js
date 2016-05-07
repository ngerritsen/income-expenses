import { ADD, REMOVE, EDIT, GET } from './constants'

const initialState = {
  items: [],
  initialized: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: [ ...state.items, action.item ]
      }
    case REMOVE:
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.id)
      }
    case EDIT:
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === action.item.id ? { item, ...action.item } : item
        })
      }
    case GET:
      return {
        ...state,
        items: action.items,
        initialized: true
      }
    default:
      return state
  }
}
