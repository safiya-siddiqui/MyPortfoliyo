import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Services from './Services'
import Experience from './Experience'
import Work from './Work'
import Skill from './Skill'
import Portfoliyo from './Portfoliyo'
import Contact from './Contact'
import Footer from './Footer'
import { Switch, Route,  Redirect } from "react-router-dom";
import Qualification from './Qualification'

const App = () => {
  return (
    <>
    <Navbar/>

  <Switch><Route exact path="/" component={Intro}
  

  />

<Route exact path="/Services" component={Services}/>

<Route exact path="/Work" component={Work
}/>
<Route exact path="/Experience" component={Experience}/>

<Route exact path="/Skills" component={Skill}/>




<Route exact path="/Portfoliyo" component={Portfoliyo}/>
<Route exact path="/Qualification" component={Qualification}/>



<Route exact path="/Contact" component={Contact}/>

<Redirect to ="/"/></Switch>
 
<Footer/>

 </>   
 
 
    
  )
}

export default App
