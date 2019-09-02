import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../../store/reducers/actions/ingsActions'
import styles from './IngredientController.module.css'

function IngredientController(props) {
  const ings = useSelector(
    (state) => {
      return state.ings
    }
  )
  const curIng = ings.filter(
    (cur) => {
      return cur.food === props.food
    }
  )
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
      <p className={styles.text}>{props.food}</p>
      <div className={styles.counter}>
        <button onClick={removeItem}>-</button>
        <p>{curIng[0].amount}</p>
        <button onClick={addItem}>+</button>
      </div>
    </div>
  )
}

export default IngredientController