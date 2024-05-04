import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {

  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link> </li>
        <li><Link to="/Contactus">Contact us</Link> </li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </>
  )
}

export default Navbar
