import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/UserContextProvider'


export default function App() {
  return (
    <UserContextProvider>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}