import Image from 'next/image'
import { PlusCircleIcon } from '@heroicons/react/solid'

import useAuth from '../hooks/useAuth'
import AvatarNoFound from '../public/avatar.png'
import BruceHistory from '../public/bruce-history.jpg'
import ViudaHistory from '../public/viuda-history.jpg'
import BrujiHistory from '../public/bruji-history.jpg'
import BruceAvatar from '../public/bruce-avatar.jpg'
import BrujiAvatar from '../public/bruji-avatar.jpg'
import ViudaAvatar from '../public/viuda-avatar.jpg'

const HistoryCard = () => {
  const { authUser } = useAuth()

  return (
    <div className='bg-white px-2 pb-3 rounded-xl shadow-md'>
      <div className='flex items-center justify-around mb-3 border-gray-100 border-b-2'>
        <p className='py-4 px-10 text-center text-blue-500 font-medium border-blue-500 border-b-4'>
          Historias
        </p>
        <p className='py-4 px-10 text-center text-gray-500 font-medium'>
          Reels
        </p>
        <p className='py-4 px-10 text-center text-gray-500 font-medium'>
          Salas
        </p>
      </div>
      <div className='flex space-x-2'>
        <div className='mt-2 relative rounded-2xl shadow-md'>
          <Image
            src={authUser?.photoURL ? authUser.photoURL : AvatarNoFound}
            alt='Historia'
            height={220}
            width={130}
            className='object-cover rounded-2xl'
          />
          <span className='z-10 absolute bottom-0 left-0 right-0 m-auto text-center text-gray-500 bg-white rounded-b-2xl pt-6 pb-3 font-medium'>
            Crear historia
          </span>
          <div className='absolute z-10 flex items-center justify-center bottom-10 left-0 right-0 m-auto h-10 w-10 rounded-full border-none bg-white'>
            <PlusCircleIcon className='text-blue-500' />
          </div>
        </div>
        <div className='mt-2 relative'>
          <Image
            src={BruceHistory}
            alt='Historia'
            height={220}
            width={130}
            className='object-cover rounded-2xl'
          />
          <span className='z-10 absolute bottom-3 left-0 right-0 m-auto text-center text-white font-medium'>
            Hulk
          </span>
          <div className='absolute top-3 left-4 h-10 w-10 rounded-full border-4 border-blue-500'>
            <Image
              src={BruceAvatar}
              alt='Historia'
              height={40}
              width={40}
              className='object-cover rounded-full border-2'
            />
          </div>
        </div>
        <div className='mt-2 relative'>
          <Image
            src={ViudaHistory}
            alt='Historia'
            height={220}
            width={130}
            className='object-cover rounded-2xl'
          />
          <span className='z-10 absolute bottom-3 left-0 right-0 m-auto text-center text-white font-medium'>
            Viuda Negra
          </span>
          <div className='absolute top-3 left-4 h-10 w-10 rounded-full border-4 border-blue-500'>
            <Image
              src={ViudaAvatar}
              alt='Historia'
              height={40}
              width={40}
              className='object-cover rounded-full border-2'
            />
          </div>
        </div>
        <div className='mt-2 relative'>
          <Image
            src={BrujiHistory}
            alt='Historia'
            height={220}
            width={130}
            className='object-cover rounded-2xl'
          />
          <span className='z-10 absolute bottom-3 left-0 right-0 m-auto text-center text-white font-medium'>
            Bruja Escarlata
          </span>
          <div className='absolute top-3 left-4 h-10 w-10 rounded-full border-4 border-blue-500'>
            <Image
              src={BrujiAvatar}
              alt='Historia'
              height={40}
              width={40}
              className='object-cover rounded-full border-2'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryCard
