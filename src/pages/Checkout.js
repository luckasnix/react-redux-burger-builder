import React, { useEffect } from 'react'

const styles = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'green',
  zIndex: '-1'
}

function Checkout({ location }) {
  useEffect(
    () => {
      const query = new URLSearchParams(location.search)
      let ings = {}
      for (let param of query.entries()) {
        ings[param[0]] = +param[1]
      }
      console.log(ings)
    },
    [location]
  )
  return <div style={styles}/>
}

export default Checkout