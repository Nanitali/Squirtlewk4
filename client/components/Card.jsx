import React from 'react'

const Card = props => {
  return (

    <div>
      {props.isVisible && <img className ='card' src ={props.value}/>}

    </div>
  )
}

export default Card
