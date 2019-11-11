import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavItem.module.css'

function NavItem({ title, link, icon }) {
  return (
    <li className={styles.navItem}>
      <NavLink
        to={link}
        exact={true}
        activeClassName={styles.active}
      >
        <div>{icon}</div>
        <p>{title}</p>
      </NavLink>
    </li>
  )
}

export default NavItem