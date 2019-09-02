import React from 'react'
import BurgerIngredient from './components/BurgerIngredient'
import styles from './BurgerDisplay.module.css'

function BurgerDisplay(props) {
  let ings = []
  for(const [key, value] of Object.entries(props.ingsAmount)) {
    for(let amt = 1; amt <= value; amt++) {
      ings.push(<BurgerIngredient key={key + amt} type={key}/>)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <BurgerIngredient type='breadTop'/>
        {ings}
        <BurgerIngredient type='breadBottom'/>
      </div>
    </div>
  )
}

export default BurgerDisplay