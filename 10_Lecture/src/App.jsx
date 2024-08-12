import React from 'react'
import { Outlet } from "react-router-dom";
import { Footer, Home, Navbar } from './components';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
