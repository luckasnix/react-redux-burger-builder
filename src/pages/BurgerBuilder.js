import React from 'react'
import BurgerDisplay from './containers/BurgerDisplay'
import BurgerController from './containers/BurgerController'

function BurgerBuilder() {
  return (
    <>
      <BurgerDisplay/>
      <BurgerController/>
    </>
  )
}

export default BurgerBuilder