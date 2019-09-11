import React from 'react'
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

export default OrderButton