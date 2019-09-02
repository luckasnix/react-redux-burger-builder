import React, { useState } from 'react'
import BurgerDisplay from './containers/BurgerDisplay'
import BurgerController from './containers/BurgerController'

function BurgerBuilderPage() {
  const [ingsAmount, setIngsAmount] = useState(
    {
      bacon: 1,
      salad: 1,
      cheese: 1,
      meat: 1
    }
  )
  return (
    <>
      <BurgerDisplay ingsAmount={ingsAmount}/>
      <BurgerController/>
    </>
  )
}

export default BurgerBuilderPage