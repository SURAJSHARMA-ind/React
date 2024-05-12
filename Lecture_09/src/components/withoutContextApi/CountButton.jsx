import React from 'react'

function CountButton({counter}) {
  const countHandler=() => {
    counter.setCount(counter.count+1)
  }
  
  return (
    <>
      <button onClick={countHandler}>Counter</button>
    </>
  )
}

export default CountButton
