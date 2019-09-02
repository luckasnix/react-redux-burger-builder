import * as Types from './types/ingsTypes'

export function addIng(food) {
  return {
    type: Types.ADD_ING,
    payload: {
      food: food
    }
  }
}

export function removeIng(food) {
  return {
    type: Types.REMOVE_ING,
    payload: {
      food: food
    }
  }
}