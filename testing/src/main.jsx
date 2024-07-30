import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Features from './components/Features.jsx'
import Todo from './components/Todo.jsx'
import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element ={<App/>}>
    <Route path="" element={<Home/>}/>
    <Route path="Features" element={<Features/>}/>
    <Route path="Todo" element={<Todo/>}/>
  </Route>
)
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
