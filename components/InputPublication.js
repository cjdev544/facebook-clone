import Image from 'next/image'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'

import useAuth from '../hooks/useAuth'
import IconRow from '../components/IconRow'

const InputPublication = () => {
  const { authUser } = useAuth()

  const name = authUser.displayName.split(' ')[0]

  return (
    <div className='bg-white shadow-md mt-4 rounded-xl border-1 border-gray-200'>
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
          <div className='w-full ml-2 mb-3 items-center rounded-full bg-gray-100 p-2 cursor-pointer hover:bg-gray-200'>
            <span className='ml-2 text-gray-500'>
              ¿Qué estás pensando?, {name}
            </span>
          </div>
        </div>
        <div className='flex mt-2'>
          <IconRow
            Icon={VideoCameraIcon}
            title='Video en vivo'
            color='text-rose-500'
          />
          <IconRow
            Icon={CameraIcon}
            title='Foto/video'
            color='text-green-500'
          />
          <IconRow
            Icon={EmojiHappyIcon}
            title='Sentimiento/actividad'
            color='text-amber-500'
          />
        </div>
      </div>
    </div>
  )
}

export default InputPublication
