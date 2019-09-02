import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as Actions from '../../../store/reducers/actions/ingsActions'
import styles from './IngredientController.module.css'

function IngredientController(props) {
  const dispatch = useDispatch()
  const addIng = useCallback(
    (food) => {
      dispatch(Actions.addIng(food))
    },
    [dispatch]
  )
  const addItem = useCallback(
    () => {
      addIng(props.food)
    },
    [addIng, props.food]
  )
  const removeIng = useCallback(
    (food) => {
      dispatch(Actions.removeIng(food))
    },
    [dispatch]
  )
  const removeItem = useCallback(
    () => {
      removeIng(props.food)
    },
    [removeIng, props.food]
  )
  return (
    <div className={styles.container}>
      <button onClick={removeItem}>-</button>
      <p>{props.food}</p>
      <button onClick={addItem}>+</button>
    </div>
  )
}

export default IngredientController