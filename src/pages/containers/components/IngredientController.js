import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
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
      <p className={styles.label}>{props.label}</p>
      <div className={styles.counter}>
        <button disabled={props.amount === 0} onClick={removeItem}>-</button>
        <p>{props.amount}</p>
        <button onClick={addItem}>+</button>
      </div>
    </div>
  )
}

IngredientController.propTypes = {
  food: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default IngredientController