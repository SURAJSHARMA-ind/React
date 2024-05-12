import React, { useContext } from 'react'
import CountButton from './CountButton'
import counterContext from './context'



function Navbar() {
  const value = useContext(counterContext)
  return (
    <>
    <h1>Navbar counter is {value.count}</h1>
    <CountButton />
    </>
  )
}''

export default Navbar
