import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>
    <div className="card" style={{overflow:"hidden",height:"60vh", width:"30%" }}>
      <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={233} alt="" 
      style={{width:"100%" , height:"70%"}}/>
    <h1>{props.name}</h1>
    <p>{props.desc}</p>
    </div>
    </>
  )
}

export default Card
