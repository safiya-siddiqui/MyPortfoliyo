import React from 'react'
import './Intro.css'
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {BsInstagram } from "react-icons/bs";
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import Services from './Services';
import Work from './Work'
import Experience from './Experience'
import Skill from './Skill';
import Portfoliyo from './Portfoliyo';
import Contact from './Contact';
import Qualification from './Qualification';
const Intro = () => {
  const transition={duration:2 , type:'spring'}

  return (
    <div>
      <motion.div   
  className="intro">
      <div className="intro-left">
      
        <div className="intro-name">
          <span  >Hey! I am</span>
          <span>Safiya Siddiqui</span>
          <span>I am frontend developer and I am a Intern in a Oasis Infobyte </span>
          <button className=" buttonns intro-button">
          <NavLink className='nav-link' to='/Services'>
              About me
                    </NavLink></button>

          <div className="intro-icons">
          <BsGithub/>
          <BsLinkedin/>
           <BsInstagram/>
          </div>
        </div>
      </div>
      <div className="intro-right">
      <div className="intro-container">
      <div className="orange-div"></div>
      <div className="intro-image">
        <img src="./images/saffo.png" alt="" />
        </div>
        
      </div>
      </div>
    </motion.div>
<Services/>
<Work/>

<Skill/>
<Portfoliyo/>
<Qualification/>
<Contact/>
    </div>
  )
}

export default Intro
