import React from 'react'
import IngredientController from './components/IngredientController'
import styles from './BurgerController.module.css'

function BurgerController() {
  return (
    <div className={styles.container}>
      <IngredientController food='cheese'/>
      <IngredientController food='meat'/>
      <IngredientController food='salad'/>
    </div>
  )
}

export default BurgerController