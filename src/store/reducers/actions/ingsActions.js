import * as Types from './types/ingsTypes'

export function createMenu(menu) {
  return {
    type: Types.CREATE_MENU,
    payload: {
      menu: menu
    }
  }
}

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