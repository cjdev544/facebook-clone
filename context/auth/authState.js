import { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

import { auth, db, googleProvider } from '../../firebase/config'
import AuthContext from './AuthContext'

const AuthState = ({ children }) => {
  const [authUser, setAuthUser] = useState(undefined)
  const [displayName, setDisplayName] = useState('')
  const [userId, setUserId] = useState(null)
  const [credentialsProvider, setCredentialsProvider] = useState(null)

  useEffect(() => {
    listenAuthChange()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (userId) checkAuthUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  const listenAuthChange = () => {
    onAuthStateChanged(auth, (credentials) => {
      if (credentials?.uid) {
        setCredentialsProvider(credentials.providerData[0])
        setUserId(credentials.uid)
      } else {
        setAuthUser(null)
      }
    })
  }

  const checkAuthUser = async () => {
    const refUser = doc(db, 'users', userId)
    const userExist = await getDoc(refUser)
    if (userExist?.data()) {
      setAuthUser(userExist.data())
    } else {
      createAuthUser(refUser)
    }
  }

  const createAuthUser = async (refUser) => {
    try {
      if (!credentialsProvider?.photoURL) {
        credentialsProvider.photoURL =
          'https://firebasestorage.googleapis.com/v0/b/facebook-clone-ae8d8.appspot.com/o/avatar%2Favatar.png?alt=media&token=1c634850-2d6b-44dc-8d31-3a784a027e37'
      }

      const dataUser = {
        ...credentialsProvider,
        uid: userId,
        displayName: credentialsProvider.displayName || displayName,
        image:
          'https://firebasestorage.googleapis.com/v0/b/facebook-clone-ae8d8.appspot.com/o/imageProfile%2Fno-image.png?alt=media&token=1af17dbf-1424-447d-b059-ea1c726eb000',
        friends: [],
      }
      await setDoc(refUser, dataUser)
      setAuthUser(dataUser)
    } catch (err) {
      console.log(err)
    }
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

  const registerWhitEmailAndPassword = async (
    name,
    lastname,
    email,
    password,
    setLoading
  ) => {
    setLoading(true)
    try {
      setDisplayName(`${name} ${lastname}`)
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log(err)
      toast.error('Error al registrar usuario')
      setLoading(false)
    }
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

  const logout = async () => {
    try {
      await signOut(auth)
      setAuthUser(null)
      setUserId(null)
      setCredentialsProvider(null)
    } catch (error) {
      console.log(err)
      toast.error('¡Error en el servidor! intente de nuevo')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authUser,
        setAuthUser,
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
