import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" >
   <h2>Safiya</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" 
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className='nav-link-active ' aria-current="page" to ='/Home'>
                   Home
                    </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/Services'>
                   About
                    </NavLink>
        </li>

        <li className="nav-item">
        <NavLink className='nav-link' to='/Work'>
                    Work
                    </NavLink></li>
        

        

        <li className="nav-item">
        <NavLink className='nav-link' to='/Skills'>
                 Skills
                    </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/Portfoliyo'>
                 Portfoliyo
                    </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className='nav-link' to='/Qualification'>
                Education
                    </NavLink>
        </li>

       
                 
        
      </ul>
      <button className="button n-button">
         
         <NavLink className='nav-link' to='/Contact'>
      Contact
         </NavLink>
       
 </button>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
