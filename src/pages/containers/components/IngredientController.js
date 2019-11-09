import React, { useCallback, useContext } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../../../context/provider/reducer/actions/actions'
import Context from '../../../context/Context'
import styles from './IngredientController.module.css'

function IngredientController({ label, food, amount }) {
  const { dispatch } = useContext(Context)
  const addIng = useCallback(
    (food) => {
      dispatch(actions.addIng(food))
    },
    [dispatch]
  )
  const addItem = useCallback(
    () => {
      addIng(food)
    },
    [addIng, food]
  )
  const removeIng = useCallback(
    (food) => {
      dispatch(actions.removeIng(food))
    },
    [dispatch]
  )
  const removeItem = useCallback(
    () => {
      removeIng(food)
    },
    [removeIng, food]
  )
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <div className={styles.counter}>
        <button disabled={amount === 0} onClick={removeItem}>-</button>
        <p>{amount}</p>
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