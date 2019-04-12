import React from 'react'


class Ball extends React.Component {
  onClick = () => {
    this.props.history.push('/board')
  }
  render () {

    return (
      <React.Fragment>
        <h1>Click ball to play!</h1>
        <img src="images/pokeball.png" className='ballSpin' onClick={this.onClick}/>
      </React.Fragment>

    )
  }
}

export default Ball
