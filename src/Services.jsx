import React, { useState } from 'react'
import './Services.css'



import { motion } from "framer-motion";

const Services = () => {
 

  return (
    <div>
     <div className="services">
      <div 
    
          className="left-services">
        <div className="services-name">
        <span>About me</span>
        <span>Frontend developer</span>
        <span>I’m an undergrad, self taught web developer from Muzaffarnagar, India.
        <br/> I possess skilled talent and immense experience in   <br/> creating and maintaining visually appealing 
        <br/>
        and user-friendly websites. I have comprehensive knowledge    <br/>of various web development technologies  <br/>such as HTML, CSS, JavaScript, Tailwind CSS, ReactJS, and Firebase.
        <br/> 
        This skill set enables me to build responsive and    <br/>interactive websites with excellent functionality features.
        <br/>
Overall, I guarantee the highest level of professionalism, technical proficiency, and client satisfaction in every aspect of web development.

</span>

<a href="./images/Safiya Siddiqui Resume.pdf" download><motion.button whileHover={{scale:1.2}} 
whileTap={{scale:0.9}}  className="buttones "  onClick={()=> null}>Download cv</motion.button></a>

      </div>
        </div>
      
       
    
      
     
       
    
     
     </div>

    

    </div>
  )
}

export default Services
