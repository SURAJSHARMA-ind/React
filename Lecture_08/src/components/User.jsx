import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} =useParams()
  return (
    <div>
      <h1 className='text-3xl bg-gray-500 p-4'>User : {userid}</h1>
    </div>
  )
}

export default User
