import React from 'react'
import BurgerDisplay from './BurgerDisplay'
import styles from './BurgerBuilder.module.css'

function BurgerBuilder() {
  return (
    <div className={styles.container}>
      <BurgerDisplay/>
    </div>
  )
}

export default BurgerBuilder