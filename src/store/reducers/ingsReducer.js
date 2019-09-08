import { createReducer } from 'redux-create-reducer'
import * as Types from './actions/types/ingsTypes'

const initState = [
  { label: 'Bacon', food: 'bacon', price: 100, amount: 0 },
  { label: 'Salada', food: 'salad', price: 50, amount: 0 },
  { label: 'Queijo', food: 'cheese', price: 200, amount: 0 },
  { label: 'Carne', food: 'meat', price: 350, amount: 0 }
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
    }
  }
)

export default ingsReducer