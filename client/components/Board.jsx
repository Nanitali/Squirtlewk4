import React from 'react'

import Card from './Card'

class Board extends React.Component {
  render () {
    return <div className='cards'>
      {this.props.cards.map(card => {
        return <Card
          key={card.id}
          info={card.info}
          value={card.value}
          isVisible={card.isVisible} />
      })}
    </div>
  }
}

export default Board
