import React from 'react'
import './Card.css'

const Card = ({imges ,heading,detail}) => {
  

  return (
    
    <div>
      <div 
   
      
   className="card">
        <img src={imges} alt="" />
        <span>{heading}</span>
        <br />
        <span>{detail}</span>
        <button className="btn-card">Learn more</button>
      </div>
    </div>
  )
}

export default Card
