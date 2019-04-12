import React from 'react'

const Card = props => {
  return (

    <div className ='card' onClick={props.clicker}>
      {props.isVisible && props.value}

    </div>
  )
}

export default Card
