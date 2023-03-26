import React from 'react'
import './Portfoliyo.css'
import { BsGithub } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from 'framer-motion';
const Portfoliyo = () => {



  
  return (
    <div>
     <div className="portfoliyo">
        <span>My rescent</span>
        <span>Portfoliyo projects</span>
       <div className="port">
    
       <div className="portfoliyocard">
  <img src='./images/cute.jpg' alt="remote" />
  <span>safiya</span>
  <span>siddiqui</span>
  <div className="b-icons">
    <a href="https://github.com/safiya-siddiqui/oasis-infobyte-Task/commit/0e381d2e3166a90a088fd89f5662c4d29288274d"><BsGithub/></a>
  <a href=""> <BsLink45Deg/></a> </div>
</div>


<div className="portfoliyocard">
  <img src='./images/cute.jpg' alt="remote" />
  <span>safiya</span>
  <span>siddiqui</span>
  <div className="b-icons">
  <a href="https://github.com/safiya-siddiqui/quize"><BsGithub/></a>
  <a href=""><BsLink45Deg/></a>
  </div>
</div>
         
         <div className="portfoliyocard">
  <img src='./images/cute.jpg' alt="remote" />
  <span>safiya</span>
  <span>siddiqui</span>
  <div className="b-icons">
  <a href="https://github.com/safiya-siddiqui/Typing-speed-calculator/blob/master/type.html"><BsGithub/></a>
  <a href=""><BsLink45Deg/></a>
  </div>
</div>
      
        </div>
       </div>
    </div>
   
  )
}

export default Portfoliyo
