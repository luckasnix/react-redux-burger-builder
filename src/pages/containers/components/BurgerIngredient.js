import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredient.module.css'
import breadTop from '../../../assets/images/bread-top.svg'
import breadBottom from '../../../assets/images/bread-bottom.svg'
import bacon from '../../../assets/images/bacon.svg'
import salad from '../../../assets/images/salad.svg'
import cheese from '../../../assets/images/cheese.svg'
import meat from '../../../assets/images/meat.svg'

function BurgerIngredient(props) {
  const ingredients = {
    'bread-top': breadTop,
    'bread-bottom': breadBottom,
    'bacon': bacon,
    'salad': salad,
    'cheese': cheese,
    'meat': meat
  }
  return (
    <img
      className={styles.image}
      src={ingredients[props.type]}
      alt='Ingrediente do hambúrguer'
    />
  )
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient