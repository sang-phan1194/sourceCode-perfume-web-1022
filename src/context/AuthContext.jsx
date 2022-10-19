import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { createContext } from "react"
import { auth } from "../firebase"

export const AuthContext = createContext()
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  useEffect(() => {
    const ubSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(currentUser)
    })

    return () => {
      ubSub()
    }
  })

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
