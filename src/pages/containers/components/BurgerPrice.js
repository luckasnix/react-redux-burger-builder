import React from 'react'
import styles from './BurgerPrice.module.css'

const { format: formatPrice } = new Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL'
  }
)

function BurgerPrice(props) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{props.label}</p>
      <p className={styles.price}>{formatPrice(props.price)}</p>
    </div>
  )
}

export default BurgerPrice