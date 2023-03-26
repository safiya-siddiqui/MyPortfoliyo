import React from 'react'
import './Footer.css'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="left-footer">
          
        <span>Reach me out</span>
            <div className="footer-icons">
            <BsGithub/>
          <BsLinkedin/>
           <BsInstagram/>
          
            </div>
            <h6 className='mail'>siddiquisafiya69@gmail.com</h6>

           
            
        </div>
        </div>
       
       
     
    </div>
  )
}

export default Footer
