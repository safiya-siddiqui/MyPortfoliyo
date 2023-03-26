import React from 'react'


import Intro from './Intro'
import Services from './Services'
import Experience from './Experience'
import Work from './Work'
import Skill from './Skill'
import Portfoliyo from './Portfoliyo'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <Intro/>
      <Services/>
      <Work/>
      <Experience/>
      <Skill/>
      <Portfoliyo/>
      <Contact/>

    </div>
  )
}

export default Home
