import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Header from './pages/containers/Header'
import BurgerBuilder from './pages/BurgerBuilder'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <BurgerBuilder/>
    </Provider>
  )
}

export default App