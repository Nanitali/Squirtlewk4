import React from 'react'

import Card from './Card'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      card1: null,
      card2: null
    }
    this.clicker = this.clicker.bind(this)
  }

clicker = (id) => {
  const { card1 } = this.state
  const card = this.props.cards.find(idx => idx.id === id)
  card.isVisible = true
  if (card1 === null) {
    this.setState({
      card1: card
    })
  }
}








render () {
  return (
    <React.Fragment>

      <div className='cards'>

        {this.props.cards.map(card => {
          return <Card
            key={card.id}
            info={card.info}
            value={card.value}
            isVisible={card.isVisible}
            clicker={this.clicker.bind(this, card.id)}
          />
        })}

      </div>
    </React.Fragment>
  )
}
}

export default Board
