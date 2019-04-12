import React from 'react'
import { Route } from 'react-router-dom'

import Board from './Board'
import data from '../data'
import Ball from './Ball'

const tryAgain = 'YOU LOSE'
const winMessage = 'Pika Pika Winner!'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const hasWon = this.state.matchCount === (data.length / 2)
    return (

      <div className='game'>
        <h1>Welcome to the Memomon</h1>
        <h2>Match all the Pokemon to win - GOTTA MATCH EM ALL!</h2>

        <Route exact path="/" component={Ball} />
        
        <Route exact path="/board" render={() =>
          <Board cards={data} foundMatch={this.foundMatch} />
        } />

        <h5>{hasWon && winMessage}</h5>
        <h1>{!this.state.isMatch && tryAgain}</h1>

        <div className='replaybutton'>
          {hasWon && <button onClick={this.reset}>Play Again</button>}
        </div>
      </div>  
    )
  }
}

export default App
