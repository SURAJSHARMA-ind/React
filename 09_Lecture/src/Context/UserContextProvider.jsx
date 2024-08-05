import React, {useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const[userDetail,setUserDetail] = useState()
  return (
    <UserContext.Provider value={{userDetail,setUserDetail}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
