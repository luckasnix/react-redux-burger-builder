import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './OrderModal.module.css'

const { format: formatPrice } = new Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL'
  }
)

function OrderModal({ history, closure }) {
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
  const handleFinish = useCallback(
    () => {
      history.push('/checkout');
    },
    [history]
  )
  return (
    <>
      <div className={styles.blackdrop} onClick={closure}/>
      <div className={styles.container}>
      <table className={styles.table}>
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {
              ings !== [] && ings.map(
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
        <button className={styles.purchaseButton} onClick={handleFinish}>Finalizar compra!</button>
        <button className={styles.closeButton} onClick={closure}>X</button>
      </div>
    </>
  )
}

export default withRouter(OrderModal)