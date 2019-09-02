import React, { useState } from 'react'
import BurgerDisplay from './BurgerDisplay'
import styles from './BurgerBuilder.module.css'

function BurgerBuilder() {
  const [ingsAmount, setIngsAmount] = useState(
    {
      bacon: 1,
      salad: 2,
      cheese: 1,
      meat: 2
    }
  )
  return (
    <div className={styles.container}>
      <BurgerDisplay ingsAmount={ingsAmount}/>
    </div>
  )
}

export default BurgerBuilder