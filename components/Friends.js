import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser'

const Friends = ({ setShowPhotosGrid, setShowFriends, setFriendsNumber }) => {
  const { query } = useRouter()
  const { user } = query
  const { authUser } = useAuth()
  const { allFriends, getFriendsUser, updateFriends } = useUser()
  const [userFriends, setUserFriends] = useState([])

  useEffect(() => {
    getFriendsUser(user).then((res) => {
      setUserFriends(res)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const removeFriend = async (user) => {
    const { userPage } = await getOneUser(user.uid)
    const authFriends = allFriends?.filter((friend) => friend.uid !== user.uid)
    const uidFriends = authFriends?.map((friend) => friend.uid)
    userPage.friends = userPage.friends.filter(
      (userId) => userId !== authUser.uid
    )
    await updateFriends(uidFriends, userPage)
    setFriendsNumber(userPage.friends.length)
  }

  const addFriend = async (friend) => {
    let authFriends

    if (friend?.friends) {
      friend.friends = [...friend.friends, authUser.uid]
    } else {
      friend.friends = [authUser.uid]
    }

    if (authUser?.friends) {
      authFriends = [...authUser.friends, friend.uid]
    } else {
      authFriends = [friend.uid]
    }
    await updateFriends(authFriends, friend)
  }

  return (
    <div className='grid grid-cols-2 gap-10'>
      {userFriends?.map((friend) => (
        <div key={friend.uid} className='p-2'>
          <div className='flex justify-between items-center'>
            <div
              onClick={() => {
                setShowPhotosGrid(false)
                setShowFriends(false)
              }}
            >
              <Link href={`/${friend.uid}`}>
                <a className='flex items-center gap-3'>
                  <Image
                    src={friend.photoURL}
                    width={80}
                    height={80}
                    objectFit='cover'
                    alt={`foto de ${friend.displayName}`}
                  />
                  <p className='font-medium'>{friend.displayName}</p>
                </a>
              </Link>
            </div>
            {user === authUser.uid ? (
              <button
                className='text-red-500'
                onClick={() => removeFriend(friend)}
              >
                eliminar
              </button>
            ) : (
              <button
                className='text-blue-500'
                onClick={() => addFriend(friend)}
              >
                agregar
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Friends
