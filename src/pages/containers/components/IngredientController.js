import React from 'react'
import styles from './IngredientController.module.css'

function IngredientController(props) {
  return (
    <div className={styles.container}>
      {props.type}
    </div>
  )
}

export default IngredientController