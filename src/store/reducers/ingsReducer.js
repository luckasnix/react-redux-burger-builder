import { createReducer } from 'redux-create-reducer'
import * as Types from './actions/types/ingsTypes'

const initState = [
  { food: 'bacon', price: 1000, amount: 0 },
  { food: 'salad', price: 500, amount: 0 },
  { food: 'cheese', price: 2000, amount: 0 },
  { food: 'meat', price: 3500, amount: 0 }
]

const ingsReducer = createReducer(
  initState,
  {
    [Types.ADD_ING]: (state, action) => {
      return state.map(
        (cur) => {
          if(cur.food === action.payload.food) {
            return { ...cur, amount: cur.amount + 1 }
          } else {
            return cur
          }
        }
      )
    },
    [Types.REMOVE_ING]: (state, action) => {
      return state.map(
        (cur) => {
          if(cur.food === action.payload.food) {
            return { ...cur, amount: cur.amount - 1 }
          } else {
            return cur
          }
        }
      )
    }
  }
)

export default ingsReducer