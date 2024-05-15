import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
    {
      path:"products",
      element:<Products/>
    },
    {
      path:"cart",
      element:<Cart/>
    }
    ]

      
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App></App> */}
   <RouterProvider router={router} />
  </React.StrictMode>,
)
