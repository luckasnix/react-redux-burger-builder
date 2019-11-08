import React from 'react'
import PropTypes from 'prop-types'
import styles from './OrderButton.module.css'

function OrderButton({ title, clicked, disabled }) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={clicked}
    >
      {title}
    </button>
  )
}

OrderButton.propTypes = {
  title: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default OrderButton