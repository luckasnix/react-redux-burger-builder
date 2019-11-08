import React from 'react'
import styles from './NavList.module.css'

function NavList({ children }) {
  return (
    <nav className={styles.navList}>
      <ul>{children}</ul>
    </nav>
  )
}

export default NavList