import { useContext } from 'react'
import AuthContext from '../context/auth/AuthContext'

const useAuth = () => {
  const {
    authUser,
    initWhitGmail,
    loginWhitEmailAndPassword,
    registerWhitEmailAndPassword,
    logout,
  } = useContext(AuthContext)

  const initWhitGoogle = (setLoading) => initWhitGmail(setLoading)
  const initWhitEmail = (email, password, setLoading) =>
    loginWhitEmailAndPassword(email, password, setLoading)
  const registerWhitEmail = (name, lastname, email, password, setLoading) =>
    registerWhitEmailAndPassword(name, lastname, email, password, setLoading)

  return {
    authUser,
    initWhitGoogle,
    initWhitEmail,
    registerWhitEmail,
    logout,
  }
}

export default useAuth
