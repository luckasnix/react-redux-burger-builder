import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import BurgerPrice from './components/BurgerPrice'
import OrderButton from './components/OrderButton'
import IngredientController from './components/IngredientController'
import styles from './BurgerController.module.css'

function BurgerController() {
  const ings = useSelector(
    (state) => {
      return state.ings
    }
  )
  const currentPrice = ings.reduce(
    (accum, cur) => {
      return accum + (cur.price * cur.amount)
    },
    2
  )
  const totalAmount = ings
    .map(
      (cur) => {
        return cur.amount
      }
    )
    .reduce(
      (accum, cur) => {
        return accum + cur
      }
    )
  const handleOrder = useCallback(
    () => {
      window.alert('Pedido realizado com sucesso!')
    },
    []
  )
  return (
    <div className={styles.container}>
      <div className={styles.priceDisplay}>
        <BurgerPrice label='Preço:' price={currentPrice}/>
        <OrderButton title='Compre agora!' clicked={handleOrder} disabled={!totalAmount}/>
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