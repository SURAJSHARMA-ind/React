import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
const [count,setcount] =useState(0) 

// Case 1 : Run on every render
// when we console.log useeffect in console we see useffect 2 times it is because of strictmode in main.jsx which run code 2 times.
useEffect(()=>{
console.log("run on every render");
})
// Case 2:  Run only on first render.
useEffect(()=>{
console.log("Run on first render");
},[])

// Case 3: Run only when certain values changes.
useEffect(()=>{
console.log("btn click effect");
},[count])


  return (
   <>
   {/* use state hook */}
   <h1>Current value {count}</h1>
   <button onClick={()=>{setcount(count+1)}}>Add Value</button>
   <Navbar color={"yellow "} />
   </>
  )
}

export default App
