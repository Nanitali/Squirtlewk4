import React from 'react'
import { Router } from 'react-router-dom'

import Ball from './Ball'
import Board from './Board'
import Sound from './Sound'

const App = () => {
  return (
    <React.Fragment>
      <Router exact path="/" component={Ball} />
      <Router exact path="/board" component={Board} />
      <Router path="/sound" component={Sound} />
    </React.Fragment>

  )
}

export default App
