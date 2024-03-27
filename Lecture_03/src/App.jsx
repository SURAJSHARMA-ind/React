import { useState } from 'react'
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)
  const [todo, settodo] = useState([
    {
      title: "todo title",
      desc: "todo desc"
    },
    {
      title: "todo title_2",
      desc: "todo desc_2"
    }
  ])
  // todo component.........................
  const Todo = (todo) => {
    return (
      <>
        <h1> {todo.heading}</h1>
        <h1> {todo.desc} </h1>
      </>
    )
  }
  // todo component end ........................
  return (
    <>
      {showbtn ? <button>I will be shown only when another btn is clicked</button> : "nothing"}
      {showbtn && <button>I will be shown only when another btn is clicked</button>}

      <h1>counter is {count}</h1>
      <button onClick={() => { setcount(setshowbtn(!showbtn)) }}>count btn</button>


      {todo.map((item, index) => (

       <div key={index}>
          <ul className='m-4 text-3xl border-2 border-white'>
            <h3>{item.title.toUpperCase()}</h3>
            <li>{item.desc.toLowerCase()}</li>
          </ul>
          <Todo heading={item.title} desc={item.desc} />
        </div>
      ))}



    </>
  )
}

export default App
