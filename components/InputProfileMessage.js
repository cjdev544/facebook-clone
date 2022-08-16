import { useState } from 'react'
import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/solid'

import useAuth from '../hooks/useAuth'
import IconRow from '../components/IconRow'
import PostModalProfile from './modals/PostModalProfile'

const InputProfileMessage = () => {
  const { authUser } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [showDivImage, setShowDivImage] = useState(false)

  const name = authUser.displayName.split(' ')[0]

  const openImageInput = () => {
    setShowModal(true)
    setShowDivImage(true)
    console.log('mostrar imagen')
  }

  return (
    <div className='bg-white shadow-md rounded-xl border-1 border-gray-200'>
      <div className='p-3'>
        <div className='flex items-center border-gray-100 border-b-2'>
          <div className='flex items-center ml-2 mb-3'>
            <Image
              src={authUser?.photoURL ? authUser.photoURL : AvatarNoFound}
              width={40}
              height={40}
              layout='fixed'
              alt='Avatar de usuario'
              className='rounded-full cursor-pointer'
            />
          </div>
          <div
            className='w-full ml-2 mb-3 items-center rounded-full bg-gray-100 p-2 cursor-pointer hover:bg-gray-200'
            onClick={() => setShowModal(true)}
          >
            <span className='ml-2 text-gray-500'>Escribe algo a User</span>
          </div>
        </div>
        <div className='mt-2'>
          <div
            onClick={openImageInput}
            className='flex cursor-pointer p-3 hover:bg-gray-200 rounded-lg'
          >
            <CameraIcon className='h-6 mr-3 text-green-500' />
            <p className='font-semibold'>Foto/video</p>
          </div>
        </div>
      </div>
      {showModal && (
        <PostModalProfile
          showDivImage={showDivImage}
          setShowDivImage={setShowDivImage}
          setShowModal={setShowModal}
        />
      )}
    </div>
  )
}

export default InputProfileMessage
