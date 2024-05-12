import { useState } from 'react'
import './App.css'
import Navbar from "./components/withoutContextApi/Navbar"
function App() {
  const [count, setCount] = useState(0)
  
  const counter = ()=>{
    setCount(count+1)
  }
  return (
  <>
  <h1>count is : {count}</h1>
  <button onClick={counter}>count</button>

  <Navbar counter={{count,setCount}}/>
  </>
  )
}

export default App
