import * as types from './types/types'

export function createMenu(menu) {
  return {
    type: types.CREATE_MENU,
    payload: {
      menu: menu
    }
  }
}

export function addIng(food) {
  return {
    type: types.ADD_ING,
    payload: {
      food: food
    }
  }
}

export function removeIng(food) {
  return {
    type: types.REMOVE_ING,
    payload: {
      food: food
    }
  }
}