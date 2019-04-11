import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
const Ball = () => {
  return (
    <React.Fragment>
      <h1>Click to enter!</h1>
      {/* <img src="images/pokeball.png" className='ballSpin' onClick={<Link to='/board'/>}> </img> */}
    </React.Fragment>

  )
=======

class Ball extends React.Component {
  onClick = () => {
    this.props.history.push("/board")
  }
  render () {

    return (
      <React.Fragment>
        <h1>Click ball to play!</h1>
        <img src="images/pokeball.png" className='ballSpin' onClick={this.onClick}/>
      </React.Fragment>

    )
  }
>>>>>>> 7f6f289b05ed790513100c6f4b003fc3998d1f43
}

export default Ball
