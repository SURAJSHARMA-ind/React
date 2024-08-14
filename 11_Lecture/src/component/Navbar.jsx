import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement } from '../redux/counter/counterSlice'
import { Link } from 'react-router-dom'


function Navbar() {
    const count = useSelector((state) => {
        return state.counter.value
    })
    const dispatch = useDispatch()
    return (
        <>

        <Link to={'/'}>App</Link>
          <h1>counter is {count}</h1>  
       
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        </>
    )
}

export default Navbar
