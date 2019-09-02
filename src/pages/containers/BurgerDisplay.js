import React from 'react'
import { useSelector } from 'react-redux'
import BurgerIngredient from './components/BurgerIngredient'
import styles from './BurgerDisplay.module.css'

function BurgerDisplay() {
  const ings = useSelector(
    (state) => {
      return state.ings
    }
  )
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <BurgerIngredient food='breadTop'/>
        {
          ings.map(
            (cur) => {
              let curIngs = []
              for(let amt = 1; amt <= cur.amount; amt++) {
                curIngs.push(<BurgerIngredient key={cur.food + amt} food={cur.food}/>)
              }
              return curIngs
            }
          )
        }
        <BurgerIngredient food='breadBottom'/>
      </div>
    </div>
  )
}

export default BurgerDisplay