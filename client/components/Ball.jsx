import React from 'react'
import WinSound from './WinSound'

class Ball extends React.Component {
  onClick = () => {
    this.props.history.push('/board')
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
