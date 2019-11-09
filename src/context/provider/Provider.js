import React, { useReducer } from 'react'
import Context from '../Context'
import reducer from './reducer/reducer'

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Provider