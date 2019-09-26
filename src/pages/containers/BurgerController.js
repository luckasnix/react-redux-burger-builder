import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import BurgerPrice from './components/BurgerPrice'
import OrderButton from './components/OrderButton'
import IngredientController from './components/IngredientController'
import OrderModal from './OrderModal'
import styles from './BurgerController.module.css'

function BurgerController() {
  const ings = useSelector(
    (state) => {
      return state.ings
    }
  )
  let currentPrice
  if (ings === []) {
    currentPrice = 0
  } else {
    currentPrice = ings.reduce(
      (accum, cur) => {
        return accum + (cur.price * cur.amount)
      },
      2
    )
  }
  let totalAmount
  if (ings === []) {
    totalAmount = 0
  } else {
    totalAmount = ings.map(
        (cur) => {
          return cur.amount
        }
      ).reduce(
        (accum, cur) => {
          return accum + cur
        },
        0
      )
  }
  const [modalVisibility, setModalVisibility] = useState(false)
  const handleOrder = useCallback(
    () => {
      setModalVisibility(true)
    },
    [setModalVisibility]
  )
  const handleClosure = useCallback(
    () => {
      setModalVisibility(false)
    },
    [setModalVisibility]
  )
  return (
    <div className={styles.container}>
      <div className={styles.priceDisplay}>
        <BurgerPrice label='Total:' price={currentPrice}/>
        <OrderButton title='Compre agora!' clicked={handleOrder} disabled={!totalAmount}/>
      </div>
      <div className={styles.controlPanel}>
        {
          ings !== [] && ings.map(
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
      {modalVisibility && <OrderModal closure={handleClosure}/>}
    </div>
  )
}

export default BurgerController