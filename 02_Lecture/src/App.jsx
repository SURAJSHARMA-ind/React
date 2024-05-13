import { useEffect, useState} from 'react'
import './App.css'


function App() {
const [count,setcount] =useState(0) 
const [color,setcolor] =useState("red")

const counter =()=>{
  setcount(count+1)
  setcolor("green")
}



  return (
   <>
   {/* use state hook */}
   <h1 style={{color:"blue", backgroundColor: color}} >useState Hook</h1>
   <h1>Current value {count}</h1>
   <button onClick={counter}>Add Value</button>
   </>
  )
}

export default App
