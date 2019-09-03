import React from 'react'
import { useSelector } from 'react-redux'
import IngredientController from './components/IngredientController'
import styles from './BurgerController.module.css'

function BurgerController() {
  const ings = useSelector(
    (state) => {
      return state.ings
    }
  )
  return (
    <div className={styles.container}>
      {
        ings.map(
          (cur) => {
            return (
              <IngredientController
                key={cur.food}
                label={cur.label}
                food={cur.food}
              />
            )
          }
        )
      }
    </div>
  )
}

export default BurgerController