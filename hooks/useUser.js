import { useRouter } from 'next/router'
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../firebase/config'

const useUser = () => {
  const { query } = useRouter()
  const { user } = query

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
    getOneUser,
  }
}

export default useUser
