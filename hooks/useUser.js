import { useEffect, useState } from 'react'
import { doc, collection, getDoc, updateDoc, query } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useCollection } from 'react-firebase-hooks/firestore'

import { db, storage } from '../firebase/config'
import useAuth from './useAuth'

const useUser = () => {
  const { authUser, updateUser } = useAuth()
  const [friends, setFriends] = useState([])
  const [allFriends, setAllFriends] = useState([])
  const [noFriends, setNoFriends] = useState([])

  const [realTimeUsers] = useCollection(query(collection(db, 'users')))

  useEffect(() => {
    if (realTimeUsers?.docs) {
      const allUsers = realTimeUsers?.docs.map((user) => {
        const data = user.data()

        return {
          uid: data.uid,
          displayName: data.displayName,
          photoURL: data.photoURL,
        }
      })

      const users = allUsers?.filter((user) => user?.uid !== authUser?.uid)

      const friends = []
      const noFriends = []
      const allFriends = []
      users?.map((user) => {
        const isFriend = authUser?.friends?.find((userId) => {
          if (userId === user?.uid) return true
        })

        if (isFriend) {
          if (friends?.length < 11) {
            friends.push(user)
          }
          allFriends.push(user)
        } else {
          if (noFriends?.length < 7) {
            noFriends.push(user)
          }
        }
      })
      setFriends(friends)
      setNoFriends(noFriends)
    }
  }, [realTimeUsers, authUser])

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

  const updateFriends = async (authFriends, user) => {
    try {
      const authRefDoc = doc(db, 'users', authUser.uid)
      const userRefDoc = doc(db, 'users', user.uid)
      await updateDoc(authRefDoc, { ...authUser, friends: authFriends })
      await updateDoc(userRefDoc, user)
      updateUser({ ...authUser, friends: authFriends })
    } catch (err) {
      console.log(err)
    }
  }

  return {
    friends,
    noFriends,
    getOneUser,
    updateImageUser,
    updateFriends,
  }
}

export default useUser
