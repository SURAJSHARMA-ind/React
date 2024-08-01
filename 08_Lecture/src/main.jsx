import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home, Login, Contactus, About,User , Surajabout } from './components/index'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './Layout.jsx'



// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children :[
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "home",
//         element : <Home/>
//       },
//       { 
//         path:"login",
//         element:<Login/>
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contact-us",
//         element:<Contactus/>
//       },
//       {
//         path:"user/:userid",
//         element:<User/>,
//         // children:[
//         //   {
//         //     path:":userid",
//         //     element: <User/>
//         //   }
//         // ]
//       }
//     ]
//   }

// ])           

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='contact-us' element={<Contactus />} />
      <Route path='about' element={<About />} >
        <Route path='surajsharma' element={<Surajabout/>}/>
        </Route>
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
