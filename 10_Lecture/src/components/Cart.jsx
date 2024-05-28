import React from 'react'
import { cartData } from './context'
import { useContext } from 'react'


function Cart() {

  const value = useContext(cartData)
  return (
    <>
   { value.cartItems.map((product)=>{
    return(
      <h1>{product.title}</h1>
    )
   })}
      
    </>
  )
}

export default Cart
