import React from 'react'
import './skill.css'
import { motion } from 'framer-motion'
const Skill = () => {
    const transition={duration:2 , type:'spring'}

    const skill=[{
        id:0,
        img:'./images/html-5.png',
        tittle:"HTML"
    },

    {
        id:1,
        img:'./images/css-3.png',
        tittle:"CSS"
    },

    {
        id:1,
        img:'./images/js.png',
        tittle:"Javascript"
    },
    {
        id:1,
        img:'./images/atom.png',
        tittle:"React"
    },

    {
        id:1,
        img:'./images/bootstrap.png',
        tittle:"Bootstrap"
    },
    {
        id:1,
        img:'./images/c-.png',
        tittle:"C++"
    },
   
    {
        id:1,
        img:'./images/sass.png',
        tittle:"Sass"
    },
    {
        id:1,
        img:'./images/snakes.png',
        tittle:"phython"
    },

]


  return (
    <div>
     <div className="skill">
        <span>My skills</span>
        <span>Orange shadow tiles  are some my major skills</span>
        <div className="skill-cards">
          {
            skill.map((element)=>{
                return(
                    <>
                    <div 
   className="majorskill-card">
            <img src={element.img} alt="" />
            <p>{element.tittle}</p>
           </div>
                    </>
                )
            })
          }

        </div>
     </div>
    </div>
  )
}

export default Skill
