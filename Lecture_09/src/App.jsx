import { useState } from 'react'
import './App.css'
import Navbar from "./components/withContextApi/Navbar"
import counterContext from './components/withContextApi/context'
function App() {
  const [count, setCount] = useState(0)

  const counter = () => {
    setCount(count + 1)
  }
  return (
    <>
      <counterContext.Provider value={{count,setCount}}>

        <h1>count is : {count}</h1>
        <button onClick={counter}>count</button>
        {/* withoutContextApi */}
        {/* <Navbar counter={{ count, setCount }} /> */}
        <Navbar/>

      </counterContext.Provider>
    </>
  )
}

export default App
