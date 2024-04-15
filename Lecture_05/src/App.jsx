import { useState } from 'react'
import './App.css'

function App() {
  const [myDetail, setMyDetail] = useState({ myname: "Suraj", age: "21", email: "suraj200delhi@gmail.com" })

  const onClickHandler = () => {
    setMyDetail({ ...myDetail , myname:"Sam" })
    // ...myDetail =  The triple dots are known as the spread operator, which takes an iterable(array, string, or object) and expands the iterable to individual values.


  // const [form,setForm] =useState({email:"",tel:"",pass:""})
  // const handlechange =(e)=>{
  // setForm({...form, [e.target.name]:e.target.value  })
  // }
  } 

  return (
    <>
      <div className="container">
        <h1>my name is {myDetail.myname} i am {myDetail.age} year old my email is {myDetail.email}</h1>
        <button onClick={onClickHandler}>Update</button>
      </div>
      
      {/* <div className="container">
     <input type="email" name='email' onChange={handlechange} />
     <input type="tel" name='telephone' onChange={handlechange} />
     <input type="password" name='password' onChange={handlechange} />
    </div> */}
    </>
  )
}

export default App
