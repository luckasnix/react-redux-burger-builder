import React, { useContext } from 'react'
import BurgerIngredient from './components/BurgerIngredient'
import Context from '../../context/Context'
import styles from './BurgerDisplay.module.css'

function BurgerDisplay() {
  const { state } = useContext(Context)
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <BurgerIngredient food='breadTop'/>
        {
          state !== [] && state.map(
            (cur) => {
              let curstate = []
              for(let amt = 1; amt <= cur.amount; amt++) {
                curstate.push(<BurgerIngredient key={cur.food + amt} food={cur.food}/>)
              }
              return curstate
            }
          )
        }
        <BurgerIngredient food='breadBottom'/>
      </div>
    </div>
  )
}

export default BurgerDisplay