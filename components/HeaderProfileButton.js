import { useEffect, useState } from 'react'
import { PencilIcon, UserAddIcon, UserRemoveIcon } from '@heroicons/react/solid'
import { ClipLoader } from 'react-spinners'

import useUser from '../hooks/useUser'

const HeaderProfileButton = ({ userPage, authUser }) => {
  const [userIsFriend, setUserIsFriend] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { updateFriends } = useUser()

  useEffect(() => {
    if (authUser && userPage) {
      const friend = authUser.friends?.find((userId) => userId === userPage.uid)
      setUserIsFriend(friend)
    }
  }, [authUser, userPage])

  const addFriend = async () => {
    setIsLoading(true)
    let authFriends

    if (userPage?.friends) {
      userPage.friends = [...userPage.friends, authUser.uid]
    } else {
      userPage.friends = [authUser.uid]
    }

    if (authUser?.friends) {
      authFriends = [...authUser.friends, userPage.uid]
    } else {
      authFriends = [userPage.uid]
    }
    await updateFriends(authFriends, userPage)
    setIsLoading(false)
  }

  const removeFriend = async () => {
    setIsLoading(true)

    const authFriends = authUser.friends.filter(
      (userId) => userId !== userPage.uid
    )
    userPage.friends = userPage.friends.filter(
      (userId) => userId !== authUser.uid
    )
    await updateFriends(authFriends, userPage)
    setIsLoading(false)
  }

  if (userPage.uid === authUser.uid)
    return (
      <button className='bg-gray-200 flex items-center px-6 py-2 rounded-md font-2xl hover:bg-gray-300'>
        <PencilIcon className='h-5 w-5 mr-2' />
        <p className='font-bold'>Editar perfil</p>
      </button>
    )

  if (userIsFriend)
    return (
      <button
        onClick={removeFriend}
        className='bg-gray-200 flex items-center px-6 py-2 rounded-md font-2xl hover:bg-gray-300'
        disabled={isLoading}
      >
        <ClipLoader color='#fff' loading={isLoading} size={20} />
        <UserRemoveIcon className='h-5 w-5 mr-2' />
        <p className='font-bold'>Eliminar</p>
      </button>
    )

  return (
    <button
      onClick={addFriend}
      className='bg-blue-500 text-white flex items-center px-6 py-2 rounded-md font-2xl hover:bg-blue-400 mr-2 md:mb-0 mb-2'
      disabled={isLoading}
    >
      <ClipLoader color='#fff' loading={isLoading} size={20} />
      <UserAddIcon className='h-5 w-5 mr-2' />
      <p className='font-bold'>Agregar</p>
    </button>
  )
}

export default HeaderProfileButton
