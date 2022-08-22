import Image from 'next/image'
import HeaderProfileButton from './HeaderProfileButton'

const HeaderProfile = ({
  authUser,
  userPage,
  showPhotosGrid,
  setShowPhotosGrid,
}) => {
  return (
    <div className='bg-white'>
      <div className='max-w-4xl mx-auto'>
        <Image
          src={userPage.image}
          alt='foto de portada'
          height={340}
          width={940}
          objectFit='cover'
          className='rounded-b-xl mx-auto'
        />
      </div>
      <div className='relative flex flex-col md:flex-row items-center max-w-4xl mx-auto'>
        <div className='absolute top-[-6rem] md:left-10 rounded-full border-4 border-white overflow-hidden h-[170px] w-[170px]'>
          <Image
            src={userPage.photoURL}
            alt='foto de portada'
            height={170}
            width={170}
            objectFit='cover'
          />
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
