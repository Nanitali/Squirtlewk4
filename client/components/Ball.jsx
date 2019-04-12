import React from 'react'

import { Link } from 'react-router-dom'
import WinSound from './WinSound'

class Ball extends React.Component {
  onClick = () => {
<<<<<<< HEAD
    this.props.history.push('/board')
=======
    this.props.history.push('/board.')

>>>>>>> 1aa6c027f2cb3accbeadff3801acaf465bcfcc7c
  }
  render () {
    return (
      <React.Fragment>
        <h1>Click ball to play!</h1>
        <img src="images/pokeball.png" className='ballSpin' onClick={this.onClick}/>
        <WinSound />
      </React.Fragment>

    )
  }
}

export default Ball
