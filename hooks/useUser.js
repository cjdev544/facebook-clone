import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { doc, getDoc, setDoc } from 'firebase/firestore'

import { db } from '../firebase/config'
import useAuth from './useAuth'

const useUser = () => {
  const { authUser } = useAuth()
  const { query } = useRouter()
  const { user } = query

  useEffect(() => {
    if (authUser?.uid) createUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authUser])

  const createUser = async () => {
    try {
      const refUser = doc(db, 'users', authUser.uid)
      const userExist = await getDoc(refUser)

      if (!userExist?.data()) {
        if (!authUser?.photoURL)
          authUser.photoURL =
            'https://firebasestorage.googleapis.com/v0/b/facebook-clone-ae8d8.appspot.com/o/avatar%2Favatar.png?alt=media&token=1c634850-2d6b-44dc-8d31-3a784a027e37'
        const dataUser = {
          ...authUser,
          image:
            'https://firebasestorage.googleapis.com/v0/b/facebook-clone-ae8d8.appspot.com/o/imageProfile%2Fno-image.png?alt=media&token=1af17dbf-1424-447d-b059-ea1c726eb000',
          friends: [],
        }
        await setDoc(refUser, dataUser)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getOneUser = async () => {
    try {
      const refUser = doc(db, 'users', user)
      const userExist = await getDoc(refUser)

      return { userPage: userExist?.data() }
    } catch (err) {
      return {
        userPage: null,
        err,
      }
    }
  }

  return {
    createUser,
    getOneUser,
  }
}

export default useUser
