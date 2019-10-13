import React from 'react'
import NavList from './components/NavList'
import NavItem from './components/NavItem'
import styles from './Header.module.css'
import Logo from './components/Logo'
import { ReactComponent as HomeIcon } from '../../assets/images/home-icon.svg'
import { ReactComponent as BuildIcon } from '../../assets/images/build-icon.svg'
import { ReactComponent as CheckoutIcon } from '../../assets/images/checkout-icon.svg'

const sections = [
  { name: 'Conhecer', path: '/', icon: HomeIcon },
  { name: 'Construir', path: '/build', icon: BuildIcon },
  { name: 'Finalizar', path: '/checkout', icon: CheckoutIcon }
]

function Header() {
  return (
    <header className={styles.header}>
      <Logo/>
      <NavList>
        {
          sections.map(
            (cur) => {
              return (
                <NavItem
                  key={cur.name}
                  title={cur.name}
                  link={cur.path}
                  icon={<cur.icon/>}
                />
              )
            }
          )
        }
      </NavList>
    </header>
  )
}

export default Header