import React from 'react'
import styles from './NavList.module.css'

function NavList(props) {
  return (
    <nav className={styles.navList}>
      <ul>{props.children}</ul>
    </nav>
  )
}

export default NavList