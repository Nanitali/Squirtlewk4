import React from 'react'

import Card from './Card'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: this.props.cards
    }
  }

clicker = (id) => {
  //  this.props.cards.id({
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
            clicker={this.clicker(card.id)}
          />
        })}

      </div>
    </React.Fragment>
  )
}
}

export default Board
