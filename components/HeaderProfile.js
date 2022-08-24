import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/solid'

import HeaderProfileButton from './HeaderProfileButton'

const HeaderProfile = ({
  authUser,
  userPage,
  isAuthProfile,
  showPhotosGrid,
  setShowPhotosGrid,
}) => {
  return (
    <div className='bg-white'>
      <div className='relative max-w-4xl mx-auto'>
        <Image
          src={userPage.image}
          alt='foto de portada'
          height={340}
          width={940}
          objectFit='cover'
          className='rounded-b-xl mx-auto'
        />
        {isAuthProfile && (
          <div className='absolute bottom-10 right-10'>
            <button className='bg-gray-200 flex items-center px-4 py-1 rounded-md font-2xl hover:bg-gray-300 mr-2 md:mb-0 mb-2'>
              <CameraIcon className='h-5 w-5 mr-2' />
              <p className='font-bold'>Ediar foto de perfil</p>
            </button>
          </div>
        )}
      </div>
      <div className='relative flex flex-col md:flex-row items-center max-w-4xl mx-auto'>
        <div className='absolute top-[-6rem] md:left-10 rounded-full border-4 border-white overflow-hidden h-[170px] w-[170px]'>
          <div className='relative'>
            <Image
              src={userPage.photoURL}
              alt='foto de portada'
              height={170}
              width={170}
              objectFit='cover'
            />
            {isAuthProfile && (
              <div className='absolute bottom-7 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer'>
                <CameraIcon className='h-6 w-6' />
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
            onClick={() => setShowPhotosGrid(false)}
            className={`pb-4 px-4 font-semibold cursor-pointer ${
              !showPhotosGrid
                ? 'border-b-4 border-blue-500 text-blue-500'
                : 'text-gray-500'
            }`}
          >
            Publicaciones
          </p>
          <p
            onClick={() => setShowPhotosGrid(true)}
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
