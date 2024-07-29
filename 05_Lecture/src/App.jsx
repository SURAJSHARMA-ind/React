import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [myDetail, setMyDetail] = useState({ myname: "Suraj", age: "21", email: "suraj200delhi@gmail.com" })

  const onClickHandler = () => {
    setMyDetail({ ...myDetail, myname: "Sam" })
    // ...myDetail =  The triple dots are known as the spread operator, which takes an iterable(array, string, or object) and expands the iterable to individual values.


  }
  const [form, setForm] = useState({ name: "", email: "", telephone: "", password: "" })
  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitHandler = () => {
    console.log("submited");
    // setForm(form);
  }

  return (
    <>
  <Navbar prop={form}/>
      <div className="container">
        <h1>my name is {myDetail.myname} i am {myDetail.age} year old my email is {myDetail.email}</h1>
        <button onClick={onClickHandler}>Update</button>
      </div>

      <div className='justify-center'>
        <div className='flex m-2'>
          <label htmlFor="email">Name: </label><input type="email" name='name' onChange={handlechange} />
        </div>
        <div className='flex m-2'>
          <label htmlFor="email">Email: </label><input type="email" name='email' onChange={handlechange} />
        </div>
        <div className='flex m-2'>
          <label htmlFor="tel">Telephone: </label><input type="tel" name='telephone' onChange={handlechange} />
        </div>
        <div className='flex m-2'>
          <label htmlFor="pass">password: </label><input type="password" name='password' onChange={handlechange} />
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>


    </>
  )
}

export default App
