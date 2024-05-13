import React from 'react'
import CountButton from './CountButton'

function Navbar({counter}) {
  return (
    <>
    <h1>Navbar counter is {counter.count}</h1>
    <CountButton counter={counter} />
    </>
  )
}''

export default Navbar
