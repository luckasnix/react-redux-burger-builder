import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerPrice.module.css'

const { format: formatPrice } = new Intl.NumberFormat(
  'pt-BR',
  {
    style: 'currency',
    currency: 'BRL'
  }
)

function BurgerPrice({ label, price }) {
  return (
    <div className={styles.container}>
      <p className={styles.label}>{label}</p>
      <p className={styles.price}>{formatPrice(price)}</p>
    </div>
  )
}

BurgerPrice.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default BurgerPrice