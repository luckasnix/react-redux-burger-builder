import React from 'react'
import styles from './NavItem.module.css'

function NavItem(props) {
  return (
    <li className={styles.navItem}>
      {props.icon}
      <a href={props.link}>{props.title}</a>
    </li>
  )
}

export default NavItem