import React from 'react'
import { Router } from 'react-router-dom'
import Ball from './Ball'
import Board from './Board'

const App = () => {
  return (
    <React.Fragment>
      <Router exact path="/" component={Ball} />
      <Router exact path="/board" component={Board} />
    </React.Fragment>

  )
}

export default App
