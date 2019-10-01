import React from 'react'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import store from './store/store'
import Main from './pages/Main'

const firebaseConfig = {
  apiKey: 'AIzaSyB6zNaSdYm8_CVyASovG8gH05glsD7zzDM',
  authDomain: 'react-redux-burger-builder.firebaseapp.com',
  databaseURL: 'https://react-redux-burger-builder.firebaseio.com',
  projectId: 'react-redux-burger-builder',
  storageBucket: '',
  messagingSenderId: '207099384558',
  appId: '1:207099384558:web:d7bbe7e48f6d29f411d9ff'
}
firebase.initializeApp(firebaseConfig)

function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  )
}

export default App