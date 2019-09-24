import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import LoaderSpinner from './components/LoaderSpinner'
import styles from './OrderModal.module.css'

const { format: formatPrice } = new Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL'
  }
)

function OrderModal(props) {
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
  const [isLoading, setIsLoading] = useState(false)
  const handlePurchase = useCallback(
    () => {
      setIsLoading(true)
      axios.post('https://react-redux-burger-builder.firebaseio.com/order.json', ings)
        .then(
          (res) => {
            console.log(res)
          }
        )
        .catch(
          (err) => {
            console.log(err)
          }
        )
        .finally(
          () => {
            setIsLoading(false)
          }
        )
    },
    [ings, setIsLoading]
  )
  let orderSummary
  if (isLoading) {
    orderSummary = <LoaderSpinner/>
  } else {
    orderSummary = (
      <>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {
              ings.map(
                (cur) => {
                  return (
                    <tr key={cur.food}>
                      <td>{cur.label}</td>
                      <td>{cur.amount}</td>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table>
        <p className={styles.totalDisplay}>Total: {formatPrice(currentPrice)}</p>
        <button className={styles.purchaseButton} onClick={handlePurchase}>Finalizar compra!</button>
      </>
    )
  }
  return (
    <>
      <div className={styles.blackdrop} onClick={props.closure}/>
      <div className={styles.container}>
        {orderSummary}
        <button className={styles.closeButton} onClick={props.closure}>X</button>
      </div>
    </>
  )
}

export default OrderModal