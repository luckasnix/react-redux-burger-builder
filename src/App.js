import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import BurgerBuilderPage from './pages/BurgerBuilderPage'

function App() {
  return (
    <Provider store={store}>
      <BurgerBuilderPage/>
    </Provider>
  )
}

export default App