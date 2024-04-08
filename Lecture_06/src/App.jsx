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
    <input type="text" name="text" id="todotext" value={todo} onChange={onClickHandler} />
    <button onClick={onClickHandler}>Add Task</button>
    
    </>
  )
}

export default App
