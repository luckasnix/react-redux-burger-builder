import React from 'react'
import NavList from './components/NavList'
import NavItem from './components/NavItem'
import styles from './Header.module.css'
import Logo from './components/Logo'
import { ReactComponent as ConhecerIcon } from '../../assets/images/conhecer.svg'
import { ReactComponent as ContruirIcon } from '../../assets/images/construir.svg'
import { ReactComponent as AcompanharIcon } from '../../assets/images/acompanhar.svg'

const sections = [
  { name: 'Conhecer', path: '/', icon: ConhecerIcon },
  { name: 'Construir', path: '/', icon: ContruirIcon },
  { name: 'Acompanhar', path: '/', icon: AcompanharIcon }
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