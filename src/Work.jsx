import React from 'react'
import './Work.css'
import { motion } from 'framer-motion'
const Work = () => {
  return (
    <div>
      <div className="works">
      <div className="workleft-services">
        <div className="workservices-name">
        <span>Works for all these</span>
        <span>Brands and Clients</span>
        <span>Currently  I am working with the employee of Oasis Infobyte company <br/>as an intern in frontend development , <br/>
        and Also work as ENTRENURPRuner in Codin ninja 
        <br />
       
         </span>
        </div>
        <motion.button  whileHover={{scale:1.2}} 
whileTap={{scale:0.9}} onClick={()=> null}  className="button workservices-button">Hire me</motion.button>
        
      </div><div className="right-work">
        <div  className="coding-ninja">
            <img src="./images/coding-ninjas.png" alt="" />
            <span>Coding ninja</span>
        </div>
        <div  style={{left:'15rem' ,top:'2rem'}} className="Oasis-Infobyte">
            <img src="./images/coding.png" alt="" />
            <span>Oasis Infobyte</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Work
