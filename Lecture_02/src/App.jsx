import { useState } from 'react'
import './App.css'

function App() {
const [count,setcount] =useState(0) 
const [value,setvalue] =useState()
  return (
   <>
   <h1>Current value {count}</h1>
   <button onClick={()=>{setcount(count+1)}}>Add Value</button>
   </>
  )
}

export default App
