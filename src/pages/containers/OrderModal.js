import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
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
  const handlePurchase = useCallback(
    () => {
      window.alert('Comprado!')
    },
    []
  )
  return (
    <>
      <div className={styles.blackdrop} onClick={props.closure}/>
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
        <button className={styles.closeButton} onClick={props.closure}>X</button>
        <button className={styles.purchaseButton} onClick={handlePurchase}>Finalizar compra!</button>
      </div>
    </>
  )
}

export default OrderModal