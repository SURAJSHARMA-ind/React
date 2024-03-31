import { useState } from 'react'
import './App.css'

function App() {
const [form,setForm] =useState({email:"",tel:"",pass:""})

const handlechange =(e)=>{
setForm({...form, [e.target.name]:e.target.value  })
}

  return (
    <>
    <div className="container">
     <input type="email" name='email' onChange={handlechange} />
     <input type="tel" name='telephone' onChange={handlechange} />
     <input type="password" name='password' onChange={handlechange} />
    </div>
    </>
  )
}

export default App
