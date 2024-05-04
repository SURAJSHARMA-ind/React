import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About'
import Contactus from './components/Contactus'
import Home from './components/Home'
import Login from './components/Login'
import { createBrowserRouter ,RouterProvider } from "react-router-dom"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Contactus",
    element:<Contactus/>
  }
])           

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
