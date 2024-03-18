import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = () => {
 
   const [count,setcount] = useState(0)
   useEffect(()=>{
    setcount(count + 1)
   },[count])

  return (
   <>
   <button></button>
   </>
  )
}

export default Navbar
