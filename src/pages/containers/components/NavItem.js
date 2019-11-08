import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavItem.module.css'

function NavItem({ title, link, icon }) {
  return (
    <NavLink className={styles.navItem} to={link}>
      <div>{icon}</div>
      <div>
        <p>{title}</p>
      </div>
    </NavLink>
  )
}

export default NavItem