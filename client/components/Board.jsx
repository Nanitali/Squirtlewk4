import React from 'react'
import Card from './Card'

class Board extends React.Component {
  state = {
    cards: this.props.cards
  }

  clicker = (id) => {
    return () => {
      const updatedCard = this.props.cards.find(card => card.id === id)
      this.setState({
        card1: updatedCard,
        cards: this.state.cards.map(card => {
          if (card.id === id) {
            card.isVisible = true
          }
          return card
        })
      })
    }
  }

  // if card1 = card 2 then
  // card 1 and card 2 are visible
  // else card 1 and 2 arent visible

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
