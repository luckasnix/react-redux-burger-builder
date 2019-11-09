import React, { useState, useCallback, useContext } from 'react'
import BurgerPrice from './components/BurgerPrice'
import OrderButton from './components/OrderButton'
import IngredientController from './components/IngredientController'
import OrderModal from './OrderModal'
import Context from '../../context/Context'
import styles from './BurgerController.module.css'

function BurgerController() {
  const { state } = useContext(Context)
  let currentPrice
  if (state === []) {
    currentPrice = 0
  } else {
    currentPrice = state.reduce(
      (accum, cur) => {
        return accum + (cur.price * cur.amount)
      },
      2
    )
  }
  let totalAmount
  if (state === []) {
    totalAmount = 0
  } else {
    totalAmount = state.map(
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
    <>
      <div className={styles.container}>
        <div className={styles.priceDisplay}>
          <BurgerPrice label='Total:' price={currentPrice}/>
          <OrderButton title='Compre agora!' clicked={handleOrder} disabled={!totalAmount}/>
        </div>
        <div className={styles.controlPanel}>
          {
            state !== [] && state.map(
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
      {modalVisibility && <OrderModal closure={handleClosure}/>}
    </>
  )
}

export default BurgerController