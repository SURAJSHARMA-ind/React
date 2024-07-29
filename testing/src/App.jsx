import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import './index.css'

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  let check;

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("todos"))
    data.length>0 && data.length != null? setTodos(data):console.log("NO todos");
  },[])

  useEffect(() => {
    saveTodo();
  }, [todos])

  const saveTodo = () => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos))
    }
    catch (error) {
      console.log(` error is ${error}`);
    }
  };

  const inputHandler = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    todo === "" ? alert("Enter Something") :
      setTodos([...todos, { id: uniqid(), todo, check: false, status }]);
    console.log(todos);
    setTodo("")

  };

  const onkeyDownHandler = (e) => {
    // console.log(e.key);
    if (e.key == "Enter") {
      addTodo();
    }
  }

  const deleteHandler = (item) => {
    const value = todos.filter((e) => {
      return item !== e.id
    })
    setTodos(value)
  }

  const editHandler = (item) => {
    const value = todos.filter((e) => {
      return item.id !== e.id
    })
    setTodos(value);
    setTodo(item.todo);
  }

  const statusHandler = (e) => {
    setStatus(e.target.value)
    console.log(status);
  }

  // difficult one is checkHandler
  const checkHandler = (item) => {
    const value = todos.findIndex((e) => {
      return e.id == item
    })
    let newTodos = [...todos];
    newTodos[value].check = !newTodos[value].check
    setTodos(newTodos)
  }


  return (
    <>
      <div className="w-full min-h-screen bg-yellow-600 flex flex-col items-center ">
        <h1 className='text-3xl font-bold items-center m-5'>TODO LIST</h1>
        <div className="w-full flex justify-center">
          <input
            type="text"
            value={todo}
            onKeyDown={onkeyDownHandler}
            onChange={inputHandler}
            className="shadow appearance-none border rounded w-1/3 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            className='p-3 ml-5 bg-white border border-black rounded'
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>

        <div className="w-full mt-5">
          {todos.length > 0 ?
            <select onChange={statusHandler} className='bg-slate-200  ml-3 rounded' name="" id="">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="notcompleted">NotCompleted</option>
            </select> : <h2 className='ml-2 rounded p-1 bg-gray-200 w-fit '>No Todos present</h2>
          }
          <ol className='list-decimal'>
            {todos.map((item) => {
              if (status == "all" || (status == "completed" && item.check == true) || (status == "notcompleted" && item.check == false)) {
                return <li className=' w-1/2 m-2' key={item.id}>
                  <input onClick={() => { checkHandler(item.id) }} className=' mr-2' checked={item.check} value={check} type="checkbox" name="" id="" />
                  <input className={`${item.check === true ? "line-through bg-gray-500" : ""} p-2 rounded`} type="text" value={item.todo} />
                  <button onClick={() => { editHandler(item) }} className='ml-5 p-1 bg-white border border-black rounded' >Edit</button>
                  <button onClick={() => { deleteHandler(item.id) }} className='ml-5 p-1 bg-white border border-black rounded'>delete</button>
                </li>
              }
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;