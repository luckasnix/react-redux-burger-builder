import React from 'react'

const styles = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'blue',
  zIndex: '-1'
}

function Home() {
  return <div style={styles}/>
}

export default Home