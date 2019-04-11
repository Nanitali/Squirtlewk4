import React from 'react'
import { Router } from 'react-router-dom'


import Board from './Board'
import data from '../data'

const tryAgain = 'YOU LOSE'
const winMessage = 'Pika Pika Winner!'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  return (
    <React.Fragment>
      <Router exact path="/" component={Ball} />
      <Router exact path="/board" component={Board} />
      <Router path="/sound" component={Sound} />
    </React.Fragment>

  )
  render () {
    const hasWon = this.state.matchCount === (data.length / 2)
    return (
      <div className='game'>
        <h1>Welcome to the Memomon</h1>
        <h2>Match all the Pokemon to win - GOTTA CATCH EM ALL!</h2>

        <Board cards={data} foundMatch={this.foundMatch} />

        <h5>{hasWon && winMessage}</h5>
        <h5>{!this.state.isMatch && tryAgain}</h5>

        <div className='replaybutton'>
          {hasWon && <button onClick={this.reset}>Play Again</button>}
        </div>
      </div>
    )

export default App
