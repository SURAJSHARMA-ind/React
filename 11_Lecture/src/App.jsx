// import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'
import {Link} from 'react-router-dom'
import Navbar from './component/Navbar'
function App() {
  const count = useSelector((state) => {
   return state.counter.value
  })

  const dispatch = useDispatch()

  return (
    <>
      <Link to={'/navbar'}>Navbar</Link>
      <h1>count is {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
    </>
  )
}

export default App
