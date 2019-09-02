import React from 'react'
import IngredientController from './components/IngredientController'
import styles from './BurgerController.module.css'

function BurgerController() {
  return (
    <div className={styles.container}>
      <IngredientController type='cheese'/>
    </div>
  )
}

export default BurgerController