import { useState } from 'react'
import './App.css'

function App() {
  const [task,SetTask] = useState()
  const onClickHandler=()=>{
   SetTask()
  }
  return (
    <>
    <h1>To DO list</h1>
    <button onClick={onClickHandler}>Add Task</button>
    
    </>
  )
}

export default App
