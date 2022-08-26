import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

import { db, storage } from '../firebase/config'
import useAuth from './useAuth'

const useUser = () => {
  const { authUser, updateUser } = useAuth()

  const getOneUser = async (user) => {
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

  const updateImageUser = async (userId, file, type) => {
    try {
      if (type === 'profile') {
        const collection = ref(storage, `profile/${userId}`)
        await uploadBytes(collection, file)
        const imageRef = ref(storage, `profile/${userId}`)
        const imageUrl = await getDownloadURL(imageRef)
        const refDoc = doc(db, 'users', userId)
        await updateDoc(refDoc, { image: imageUrl })
        updateUser({ ...authUser, image: imageUrl })
      } else {
        const collection = ref(storage, `avatar/${userId}`)
        await uploadBytes(collection, file)
        const imageRef = ref(storage, `avatar/${userId}`)
        const imageUrl = await getDownloadURL(imageRef)
        const refDoc = doc(db, 'users', userId)
        await updateDoc(refDoc, { photoURL: imageUrl })
        updateUser({ ...authUser, photoURL: imageUrl })
      }
    } catch (err) {
      console.log(err)
    }
  }

  return {
    getOneUser,
    updateImageUser,
  }
}

export default useUser
