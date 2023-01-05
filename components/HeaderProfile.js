import { useRef } from 'react'
import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify'

import useUser from '../hooks/useUser'
import HeaderProfileButton from './HeaderProfileButton'

const HeaderProfile = ({
  authUser,
  userPage,
  isAuthProfile,
  showPhotosGrid,
  setShowPhotosGrid,
  setShowFriends,
}) => {
  const inputProfileFile = useRef()
  const inputAvatarFile = useRef()

  const { updateImageUser } = useUser()

  const onChangeFile = (e, type) => {
    if (
      e.target.files[0]?.type !== 'image/jpeg' &&
      e.target.files[0]?.type !== 'image/png'
    ) {
      toast.warning('Tipo de archivo no soportado')
      return
    }
    if (type === 'profile') {
      updateImageUser(authUser.uid, e.target.files[0], 'profile')
    } else {
      updateImageUser(authUser.uid, e.target.files[0], 'avatar')
    }
  }

  const profileClick = () => inputProfileFile.current.click()
  const avatarClick = () => inputAvatarFile.current.click()

  return (
    <div className='bg-white'>
      <div className='relative max-w-4xl mx-auto'>
        <Image
          src={userPage.uid === authUser.uid ? authUser.image : userPage.image}
          alt='foto de portada'
          height={340}
          width={940}
          objectFit='cover'
          className='rounded-b-xl mx-auto'
        />
        {isAuthProfile && (
          <div className='absolute bottom-10 right-10'>
            <button
              onClick={profileClick}
              className='bg-gray-200 flex items-center px-4 py-1 rounded-md font-2xl hover:bg-gray-300 mr-2 md:mb-0 mb-2'
            >
              <CameraIcon className='h-5 w-5 mr-2' />
              <p className='font-bold'>Ediar foto de perfil</p>
            </button>

            <input
              ref={inputProfileFile}
              onChange={(e) => onChangeFile(e, 'profile')}
              type='file'
              style={{ display: 'none' }}
            />
          </div>
        )}
      </div>
      <div className='relative flex flex-col md:flex-row items-center max-w-4xl mx-auto'>
        <div className='absolute top-[-6rem] md:left-10 rounded-full border-4 border-white overflow-hidden h-[170px] w-[170px]'>
          <div className='relative'>
            <Image
              src={
                userPage.uid === authUser.uid
                  ? authUser.photoURL
                  : userPage.photoURL
              }
              alt='foto de portada'
              height={170}
              width={170}
              objectFit='cover'
            />
            {isAuthProfile && (
              <div
                onClick={avatarClick}
                className='absolute bottom-7 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer'
              >
                <CameraIcon className='h-6 w-6' />
                <input
                  ref={inputAvatarFile}
                  onChange={(e) => onChangeFile(e, 'avatar')}
                  type='file'
                  style={{ display: 'none' }}
                />
              </div>
            )}
          </div>
        </div>
        <div className='flex flex-col md:flex-row mt-20 md:mt-0 justify-between items-center w-full border-b-2 border-gray-200 pb-5 mx-10'>
          <div className='md:ml-[11rem] ml-0 md:text-left text-center md:mb-0 mb-4'>
            <h2 className='text-4xl font-bold'>{userPage.displayName}</h2>
            <p className='text-gray-500 font-semibold'>
              {userPage.friends.length} amigos
            </p>
          </div>
          <div className='md:flex'>
            <HeaderProfileButton authUser={authUser} userPage={userPage} />
          </div>
        </div>
      </div>
      <div className='max-w-4xl mx-auto pt-4'>
        <div className='flex items-center mx-10 space-x-10'>
          <p
            onClick={() => {
              setShowPhotosGrid(false)
              setShowFriends(false)
            }}
            className={`pb-4 px-4 font-semibold cursor-pointer ${
              !showPhotosGrid
                ? 'border-b-4 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
          >
            Publicaciones
          </p>
          <p
            onClick={() => {
              setShowPhotosGrid(true)
              setShowFriends(false)
            }}
            className={`pb-4 px-4 font-semibold cursor-pointer ${
              showPhotosGrid
                ? 'border-b-4 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
          >
            Fotos
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile
