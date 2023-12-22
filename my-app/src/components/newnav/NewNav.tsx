
import React from 'react'
import './newnav.css'
import { Link } from 'react-router-dom';

const NewNav = () => {
  return (
    <>
    <header className="header">
    <div className="nav_main">
    <div className="navhead">
    <a href="" className="logo">S+UM</a>
    </div>
    <div className="nav_subhead">
    <input className="menu-btn" type="checkbox" id="menu-btn" />
   
    <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
   
    <ul className="menu">
    <li >
    <a  href='/' className='nav-links'>HOME</a>
    <a href='/studio' className='nav-links'>THE STUDIO</a>
    <a href='/services' className='nav-links'>OUR SERVICES</a>
    <a href='/multi' className='nav-links'>PROJECTS</a>
    <a href='/contact' className='nav-links'>CONTACT</a>
    </li>
     
    </ul>
    </div>
    </div>
  </header> 
  </>
  
  )
}

export default NewNav