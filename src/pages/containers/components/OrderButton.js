import React from 'react'
import styles from './OrderButton.module.css'

function OrderButton(props) {
  return (
    <button
      className={styles.button}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  )
}

export default OrderButton