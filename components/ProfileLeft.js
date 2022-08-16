import Image from 'next/image'
import {
  AcademicCapIcon,
  HeartIcon,
  HomeIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid'

import Foto from '../public/bruji-history.jpg'

const ProfileLeft = () => {
  return (
    <div className='flex flex-col w-2/5 mt-5'>
      <div className='p-5 bg-white rounded-xl shadow-md'>
        <h3 className='font-bold text-xl'>Detalles</h3>
        <div className='flex mt-4'>
          <AcademicCapIcon className='h-6 w-6 mr-2 text-gray-400' />
          <p className=''>
            Estudio en <span className='font-semibold'>UNEFA</span>
          </p>
        </div>
        <div className='flex mt-4'>
          <HomeIcon className='h-6 w-6 mr-2 text-gray-400' />
          <p className=''>
            Vive en <span className='font-semibold'>Caracas</span>
          </p>
        </div>
        <div className='flex mt-4'>
          <LocationMarkerIcon className='h-6 w-6 mr-2 text-gray-400' />
          <p className=''>
            De <span className='font-semibold'>Caracas</span>
          </p>
        </div>
        <div className='flex mt-4'>
          <HeartIcon className='h-6 w-6 mr-2 text-gray-400' />
          <p className=''>
            <span className='font-semibold'>Soltero</span>
          </p>
        </div>
      </div>
      {/* Photos */}
      <div className='mt-5 p-5 bg-white rounded-xl shadow-md'>
        <div className='flex items-center justify-between'>
          <h3 className='font-bold text-xl'>Fotos</h3>
          <p className='text-blue-500 cursor-pointer'>Ver todas las fotos</p>
        </div>
        <div className='grid grid-rows-3 grid-flow-col gap-2 mt-4'>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
          <div>
            <Image
              src={Foto}
              width={80}
              height={80}
              objectFit='cover'
              alt='Foto'
              className='rounded-md'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileLeft
