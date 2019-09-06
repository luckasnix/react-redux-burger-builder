import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import BurgerBuilder from './pages/BurgerBuilder'

function App() {
  return (
    <Provider store={store}>
      <BurgerBuilder/>
    </Provider>
  )
}

export default App