import React from 'react'


class playSound extends React.Component {
  state = {
    play: false
  }
  audio = new Audio(this.Pika)

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause()
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>
    )
  }
}

export default playSound
