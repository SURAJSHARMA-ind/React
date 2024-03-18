import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = (prop) => {
 
   const [count,setcount] = useState(0);

   useEffect(()=>{
    console.log("count changed");
   },[count])

   useEffect(()=>{
console.log("run on every render");
   })

   // Example of cleanup function
useEffect(()=>{
  console.log("Hey welcome to my page");
  return()=>{
    alert("Navbar was unmounted")
  }
  },[])

  return (
   <>
   <h2>Effect {prop.color}{count}</h2>
<button onClick={()=>{setcount(count+1)}}>Use Effect btn </button>
   </>
  )
}

export default Navbar
