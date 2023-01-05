import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser'

const Friends = ({ setShowPhotosGrid, setShowFriends, setFriendsNumber }) => {
  const { query } = useRouter()
  const { user } = query
  const { authUser } = useAuth()
  const { allFriends, getOneUser, updateFriends } = useUser()

  if (allFriends?.length === 0) return null

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

  return (
    <div className='grid grid-cols-2 gap-10'>
      {allFriends.map((friend) => (
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
            <button
              className='text-red-500'
              onClick={() => removeFriend(friend)}
            >
              eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Friends
