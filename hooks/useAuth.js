import { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext'

const useAuth = () => {
  const {
    authUser,
    setAuthUser,
    initWhitGmail,
    loginWhitEmailAndPassword,
    registerWhitEmailAndPassword,
    logout,
  } = useContext(AuthContext)

  const updateUser = (newDataUser) => setAuthUser(newDataUser)
  const initWhitGoogle = (setLoading) => initWhitGmail(setLoading)
  const initWhitEmail = (email, password, setLoading) =>
    loginWhitEmailAndPassword(email, password, setLoading)
  const registerWhitEmail = (name, lastname, email, password, setLoading) =>
    registerWhitEmailAndPassword(name, lastname, email, password, setLoading)

  return {
    authUser,
    updateUser,
    initWhitGoogle,
    initWhitEmail,
    registerWhitEmail,
    logout,
  }
}

export default useAuth
