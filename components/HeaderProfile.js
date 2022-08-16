import Image from 'next/image'
import { UserAddIcon, UserRemoveIcon } from '@heroicons/react/solid'

import FotoPerfil from '../public/viuda-history.jpg'

const HeaderProfile = ({ showPhotosGrid, setShowPhotosGrid }) => {
  return (
    <div className='bg-white'>
      <div className='max-w-4xl mx-auto'>
        <Image
          src={FotoPerfil}
          alt='foto de portada'
          height={500}
          objectFit='cover'
          className='rounded-b-xl'
        />
      </div>
      <div className='relative flex flex-col md:flex-row items-center max-w-4xl mx-auto'>
        <div className='absolute top-[-6rem] md:left-10 rounded-full border-4 border-white overflow-hidden h-[170px] w-[170px]'>
          <Image
            src={FotoPerfil}
            alt='foto de portada'
            height={170}
            width={170}
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col md:flex-row mt-20 md:mt-0 justify-between items-center w-full border-b-2 border-gray-200 pb-5 mx-10'>
          <div className='md:ml-[11rem] ml-0 md:text-left text-center md:mb-0 mb-4'>
            <h2 className='text-4xl font-bold'>Susana Antonio</h2>
            <p className='text-gray-500 font-semibold'>102 amigos</p>
          </div>
          <div className='md:flex'>
            <button className='bg-blue-500 text-white flex items-center px-6 py-2 rounded-md font-2xl hover:bg-blue-400 mr-2 md:mb-0 mb-2'>
              <UserAddIcon className='h-5 w-5 mr-2' />
              <p className='font-bold'>Agregar</p>
            </button>
            <button className='bg-gray-200 flex items-center px-6 py-2 rounded-md font-2xl hover:bg-gray-300'>
              <UserRemoveIcon className='h-5 w-5 mr-2' />
              <p className='font-bold'>Eliminar</p>
            </button>
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
