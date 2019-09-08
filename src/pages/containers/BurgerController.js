import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import BurgerPrice from './components/BurgerPrice'
import IngredientController from './components/IngredientController'
import styles from './BurgerController.module.css'

function BurgerController() {
  const ings = useSelector(
    (state) => {
      return state.ings
    }
  )
  let currentPrice = useCallback(
    () => {
      return ings.reduce(
        (accum, cur) => {
          return accum + (cur.price * cur.amount)
        },
        200
      )
    },
    [ings]
  )
  return (
    <div className={styles.container}>
      <div className={styles.priceDisplay}>
        <BurgerPrice label='Preço:' price={currentPrice()}/>
      </div>
      <div className={styles.controlPanel}>
        {
          ings.map(
            (cur) => {
              return (
                <IngredientController
                  key={cur.food}
                  label={cur.label}
                  food={cur.food}
                  amount={cur.amount}
                />
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default BurgerController