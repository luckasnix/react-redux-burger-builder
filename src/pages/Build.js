import React, { useEffect, useCallback, useContext } from 'react'
import axios from 'axios'
import BurgerDisplay from './containers/BurgerDisplay'
import BurgerController from './containers/BurgerController'
import Context from '../context/Context'
import * as actions from '../context/provider/reducer/actions/actions'

function Build() {
  const { dispatch } = useContext(Context)
  const createMenu = useCallback(
    (menu) => {
      dispatch(actions.createMenu(menu))
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

export default Build