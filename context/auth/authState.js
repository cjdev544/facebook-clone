import { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { toast } from 'react-toastify'

import { auth, googleProvider } from '../../firebase/config'
import AuthContext from './AuthContext'

const AuthState = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined)

  useEffect(() => {
    listenAuthChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const listenAuthChange = () => {
    onAuthStateChanged(auth, (credentials) => {
      if (credentials?.uid) {
        setAuthUser(credentials.providerData[0])
      } else {
        setAuthUser(null)
      }
    })
  }

  const initWhitGmail = async (setLoading) => {
    setLoading(true)
    try {
      await signInWithPopup(auth, googleProvider)
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }

  const registerWhitEmailAndPassword = (
    name,
    lastname,
    email,
    password,
    setLoading
  ) => {
    setLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(user, { displayName: `${name} ${lastname}` })
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error al registrar usuario')
        setLoading(false)
      })
  }

  const loginWhitEmailAndPassword = async (email, password, setLoading) => {
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
    } catch (err) {
      console.log(err)
      toast.error('¡Error en el servidor! intente de nuevo')
      setLoading(false)
    }
  }

  const logout = () => {
    signOut(auth)
      .then(setAuthUser(null))
      .catch((err) => {
        console.log(err)
        toast.error('¡Error en el servidor! intente de nuevo')
      })
  }

  return (
    <AuthContext.Provider
      value={{
        authUser,
        initWhitGmail,
        registerWhitEmailAndPassword,
        loginWhitEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthState
