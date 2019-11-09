import * as types from './actions/types/types'

function reducer(state, action) {
  switch (action.type) {
    case types.CREATE_MENU:
      return action.payload.menu
    case types.ADD_ING:
      return state.map(
        (cur) => {
          if(cur.food === action.payload.food) {
            return { ...cur, amount: cur.amount + 1 }
          } else {
            return cur
          }
        }
      )
    case types.REMOVE_ING:
      return state.map(
        (cur) => {
          if(cur.food === action.payload.food) {
            if(cur.amount === 0) {
              return cur
            } else {
              return { ...cur, amount: cur.amount - 1 }
            }
          } else {
            return cur
          }
        }
      )
    default:
      return state
  }
}

export default reducer