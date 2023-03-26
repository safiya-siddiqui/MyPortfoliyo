import React from 'react'
import './Qualicard.css'
 
const Qualicard = ({pixles ,course,college,address,grades,session}) => {
    

  return (
    <div>
      
<div className="container">
  <div className="qualicard">
    <div className="card-imge"><img src={pixles} alt="" /></div>
    <div className="course">{course}</div>
    <div className="college">{college}</div>
    <div className="address">{address}</div>
    <div className="grades">{grades}</div>
  <div className="session" >{session}</div>
  </div>
</div>
    
    </div>
  )
}

export default Qualicard
