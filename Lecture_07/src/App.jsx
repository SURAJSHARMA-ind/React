import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pass, setPass] = useState("")
  const [passLength, setPassLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [special, setSpecial] = useState(false)

  const passgenerator = () => {
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let str = alphabets;
    let pass = ""
    if (number) {
      str += "0123456789"
    }
    if (special) {
      str += "./?!@#$%^&*|\/><"
    }
    console.log(str);
    for (let i = 0; i < passLength; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      console.log(index);
      pass = pass + str.charAt(index)
      console.log(pass);
      setPass(pass)
    }
  }

  useEffect(() => {
    passgenerator()
  }, [])

  useEffect(() => {
    passgenerator()
  }, [number,special,passLength])

 

  const numClickHandler=()=>{
    setNumber(!number)
    console.log(number);
  }

  const specClickHandler=()=>{
    setSpecial(!special)
    console.log(special);
  }
  return (
    < >
      <div className=" min-h-screen text-white  bg-black">

        <div className="container  ">
          <div className="scontainer border w-1/2 rounded   p-3'">
            <h1 className=' '> password Generator</h1>
            <input className='text-black' type="text " name="" id="" readOnly value={pass} />
          </div>

          <div className='scontainer2'>
            <input onChange={(e) => { setPassLength(e.target.value) }} value={passLength} min={8} max={20} step={1} defaultValue={10} type="range" /><label htmlFor="lenght">password Lenght  is {passLength}</label>
            <label  htmlFor="number">Number</label><input onClick={numClickHandler} type="checkbox" name="number" id="" />
            <label  htmlFor="special">SpecialKeyword</label><input onClick={specClickHandler} type="checkbox" name="specialkeyword" id="" />
          </div>
        </div>

      </div>
    </>
  )
}


export default App
