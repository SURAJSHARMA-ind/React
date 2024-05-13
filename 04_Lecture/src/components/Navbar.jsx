import React from 'react'
import "../components/Navbar.css"

const Navbar = () => {
  return (
   <>
   <div className="container container-color flex space-x-">
    <h1>Api Container</h1>
    <ul className=' scontainer flex space-x-3'>
        <li>Home</li>
        <li>About</li>
        <li>ContactUs</li>
    </ul>
   </div>
   </>
  )
}

export default Navbar
