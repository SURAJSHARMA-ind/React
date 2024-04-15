import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react';
import { uid } from 'uid';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
const App = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const onChangeHandler = (e) => {
    setTodo(e.target.value)
  };

  const checkHandler = (e) => {
    let id = e.target.name;
    const index = todos.findIndex((item) => {
      return item.id === id
    })
    console.log(index)
    let newTodos = [...todos]
    newTodos[index].iscomplete = !(newTodos[index].iscomplete)
    setTodos(newTodos)
  };

  const editHandler = (id) => {
    let index = todos.findIndex((item)=>{
      return  item.id ===id
    })
    setTodo(todos[index].todo)

    const newTodos = todos.filter((item)=>{
      return item.id !== id
    })
   
    console.log(newTodos);
    setTodos(newTodos)

  };

  const deleteHandler = (id) => {
   
    const index = todos.findIndex((item) => {
      return item.id === id
    })
    console.log(index);
    const newTodos = todos.filter((item) => {
      return item.id !== id
    })
    console.log(newTodos)
    setTodos(newTodos)
  };


  const addTodo = () => {
    if (todo === "") {
      alert("Write Something")
    }
    else {

      setTodos([...todos, { id: uid(), todo, iscomplete: false }])
      setTodo("")
    }
    
  };




  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-black '>
        <div className="container flex p-10 ">
          <input onChange={onChangeHandler} value={todo} type="text" className=' w-1/2 mx-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500'  />
          <button onClick={addTodo} type="button" className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'><MdAddTask /></button>
        </div>
        {todos.length === 0 && <h1 className='  ml-8 bold text-white'>No Todos to Display</h1>}
        {todos.map((item) => {
          return <div key={uid()} className="todocontainer mt-4 ml-8 text-white flex ">
            <div className="todoScontainer w-1/2 flex">
              <input onChange={checkHandler} checked={item.iscomplete} type="checkbox" name={item.id} id="" />
              <div className={` bg-white text-black mx-2 rounded-lg p-2 ${item.iscomplete ? "line-through" : ""}`}>{item.todo}</div>
            </div>
            <div className="btns">

              <button onClick={()=>{editHandler(item.id)}} name={item.id} className='mx-2 bg-green-500 hover:bg-green-700 text-white font-bold  p-5 rounded'><FaEdit /></button>
              <button onClick={ () => {deleteHandler(item.id)} }name={item.id} className='mx-2 bg-red-500 hover:bg-red-700 text-white font-bold  p-5 rounded '><MdDelete /></button>
            </div>
          </div>

        })}

      </div>
    </>
  )
}

export default App
