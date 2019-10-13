import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavItem.module.css'

function NavItem(props) {
  return (
    <li className={styles.navItem}>
      {props.icon}
      <NavLink to={props.link}>{props.title}</NavLink>
    </li>
  )
}

export default NavItem