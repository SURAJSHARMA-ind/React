import React from 'react'

const Login = () => {
  return (
    <>
    
   <div className=" container h-80  w-1/2 justify-center  m-5 border to-black rounded ">
    <h1 className='text-2xl text-orange-600 font-bold  '>Login</h1>

    <div className="email p-5 ">
    <label htmlFor="email " className=' text-xl '>Email : </label>
    <input type="text" placeholder='abc@gmail.com' className=' p-2 border rounded to-black'/>
    </div>

    <div className="pass p-5">
    <label htmlFor="email" className='text-xl'>Password : </label>
    <input type="password" placeholder='********' className=' p-2 border rounded to-black'/>
    </div>
    <button className='bg-orange-500  px-4 font-medium  p-3 mb-5  rounded  hover:bg-orange-600 text-white'> Submit</button>
   </div>
   </>
  )
}

export default Login
