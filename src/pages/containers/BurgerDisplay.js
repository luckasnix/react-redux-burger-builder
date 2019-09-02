import React from 'react'
import BurgerIngredient from './components/BurgerIngredient'
import styles from './BurgerDisplay.module.css'

function BurgerDisplay() {
  return (
    <div className={styles.container}>
      <BurgerIngredient type='bread-top'/>
      <BurgerIngredient type='bacon'/>
      <BurgerIngredient type='salad'/>
      <BurgerIngredient type='cheese'/>
      <BurgerIngredient type='meat'/>
      <BurgerIngredient type='bread-bottom'/>
    </div>
  )
}

export default BurgerDisplay