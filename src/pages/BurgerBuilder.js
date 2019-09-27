import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import BurgerDisplay from './containers/BurgerDisplay'
import BurgerController from './containers/BurgerController'
import * as Actions from '../store/reducers/actions/ingsActions'

function BurgerBuilder() {
  const dispatch = useDispatch()
  const createMenu = useCallback(
    (menu) => {
      dispatch(Actions.createMenu(menu))
    },
    [dispatch]
  )
  useEffect(
    () => {
      axios.get('https://react-redux-burger-builder.firebaseio.com/ingredients.json')
        .then(
          (res) => {
            createMenu(res.data)
          }
        )
    },
    [createMenu]
  )
  return (
    <>
      <BurgerDisplay/>
      <BurgerController/>
    </>
  )
}

export default BurgerBuilder