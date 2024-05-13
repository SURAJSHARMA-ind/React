import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="container">
        <h1>Reactjs</h1>
        <div className="scontainer">
          <div className="nav">Home</div>
          <div className="nav">About</div>
          <div className="nav">Contact us</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
