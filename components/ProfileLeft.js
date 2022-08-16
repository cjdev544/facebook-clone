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
    <aside className='sm:sticky top-[40px] sm:self-start sm:flex flex-col sm:w-2/5 mt-5 overflow-y-scroll scrollbar-hide'>
      <div className='p-3 bg-white rounded-xl shadow-md'>
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
      <div className='mt-5 p-3 bg-white rounded-xl shadow-md'>
        <div className='flex items-center justify-between'>
          <h3 className='font-bold text-xl'>Fotos</h3>
          <p className='text-blue-500 cursor-pointer'>Ver todas las fotos</p>
        </div>
        <div className='grid grid-rows-3 grid-flow-col gap-2 mt-4 rounded-lg overflow-hidden'>
          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />

          <Image
            src={Foto}
            width={100}
            height={100}
            objectFit='cover'
            alt='Foto'
          />
        </div>
      </div>
    </aside>
  )
}

export default ProfileLeft