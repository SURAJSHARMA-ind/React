import React, { useContext } from 'react'
import counterContext  from './context'


function CountButton() {

  const value = useContext(counterContext)
  
  const countHandler=() => {
    value.setCount(value.count+1)
  }
  
  return (
    <>
      <button onClick={countHandler}>Counter</button>
    </>
  )
}

export default CountButton
