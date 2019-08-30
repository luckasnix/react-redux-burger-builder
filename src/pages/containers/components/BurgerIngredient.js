import React from 'react'
import PropTypes from 'prop-types'
import styles from './BurgerIngredient.module.css'

function BurgerIngredient(props) {
  let ingredient = null
  switch(props.type) {
    case 'bread-top':
      ingredient = (
        <div className={styles.breadTop}>
          <div className={styles.seeds1}/>
          <div className={styles.seeds2}/>
        </div>
      )
      break
    case 'bread-bottom':
      ingredient = <div className={styles.breadBottom}/>
      break
    case 'meat':
      ingredient = <div className={styles.meat}/>
      break
    case 'cheese':
      ingredient = <div className={styles.cheese}/>
      break
    case 'salad':
      ingredient = <div className={styles.salad}/>
      break
    case 'bacon':
      ingredient = <div className={styles.bacon}/>
      break
    default:
      ingredient = null
  }
  return ingredient
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient