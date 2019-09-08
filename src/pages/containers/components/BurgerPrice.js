import React, { useCallback } from 'react'
import styles from './BurgerPrice.module.css'

function BurgerPrice(props) {
  const formatPrice = useCallback(
    (price) => {
      const priceStringify = String(price)
      if (price < 10) {
        return 'R$ 0,0' + priceStringify
      } else if (price < 100) {
        return 'R$ 0,' + priceStringify
      } else {
        return 'R$ ' + priceStringify.slice(0,-2) + ',' + priceStringify.slice(-2)
      }
    },
    []
  )
  return (
    <div className={styles.container}>
      <p className={styles.label}>{props.label}</p>
      <p className={styles.price}>{formatPrice(props.price)}</p>
    </div>
  )
}

export default BurgerPrice