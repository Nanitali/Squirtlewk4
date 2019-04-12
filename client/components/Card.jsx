import React from 'react'

const Card = props => {
  return (
    <div className='back' onClick={props.clicker}>

      {props.isVisible && <img className ='card' src ={props.value}/>}

    </div>
  )
}

export default Card
