import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './containers/Header'
import LoaderSpinner from './containers/components/LoaderSpinner'

const Home = lazy(() => { return import('./Home') })
const Build = lazy(() => { return import('./Build') })
const Checkout = lazy(() => { return import('./Checkout') })

function Main() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<LoaderSpinner/>}>
        <Switch>
          <Route path='/build' component={Build}/>
          <Route path='/checkout' component={Checkout}/>
          <Route component={Home}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Main