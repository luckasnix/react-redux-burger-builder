import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'
import KnowUs from './KnowUs'
import BurgerBuilder from './BurgerBuilder'

function Main() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/builder' component={BurgerBuilder}/>
        <Route path='/' component={KnowUs}/>
      </Switch>
    </Router>
  )
}

export default Main