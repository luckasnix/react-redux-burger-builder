import React from 'react'
import PropTypes from 'prop-types'
import styles from './OrderButton.module.css'

function OrderButton(props) {
  return (
    <button
      className={styles.button}
      disabled={props.disabled}
      onClick={props.clicked}
    >
      {props.title}
    </button>
  )
}

OrderButton.propTypes = {
  title: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default OrderButton