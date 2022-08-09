import Image from 'next/image'
import BruceHistory from '../public/bruce-history.jpg'
import ViudaHistory from '../public/viuda-history.jpg'
import BrujiHistory from '../public/bruji-history.jpg'
import CapHistory from '../public/cap-history.jpg'
import CapAvatar from '../public/cap-avatar.jpg'
import BruceAvatar from '../public/bruce-avatar.jpg'
import BrujiAvatar from '../public/bruji-avatar.jpg'
import ViudaAvatar from '../public/viuda-avatar.jpg'

const HistoryCard = () => {
  return (
    <div className='flex space-x-2'>
      <div className='mt-2 relative'>
        <Image
          src={BruceHistory}
          alt='Historia'
          height={200}
          width={110}
          className='object-cover rounded-2xl'
        />
        <span className='z-10 absolute bottom-3 left-0 right-0 m-auto text-center text-white font-medium'>
          Hulk
        </span>
        <div className='absolute top-3 left-4 h-10 w-10 bg-green-500 rounded-full border-4 border-blue-500'>
          <Image
            src={BruceAvatar}
            alt='Historia'
            height={40}
            width={40}
            className='object-cover rounded-full border-2 border-blue-600'
          />
        </div>
      </div>
      <div className='mt-2 relative'>
        <Image
          src={ViudaHistory}
          alt='Historia'
          height={200}
          width={110}
          className='object-cover rounded-2xl'
        />
        <span className='z-10 absolute bottom-3 left-0 right-0 m-auto text-center text-white font-medium'>
          Viuda Negra
        </span>
        <div className='absolute top-3 left-4 h-10 w-10 bg-green-500 rounded-full border-4 border-blue-500'>
          <Image
            src={ViudaAvatar}
            alt='Historia'
            height={40}
            width={40}
            className='object-cover rounded-full border-2 border-blue-600'
          />
        </div>
      </div>
      <div className='mt-2 relative'>
        <Image
          src={BrujiHistory}
          alt='Historia'
          height={200}
          width={110}
          className='object-cover rounded-2xl'
        />
        <span className='z-10 absolute bottom-3 left-0 right-0 m-auto text-center text-white font-medium'>
          Bruja Escarlata
        </span>
        <div className='absolute top-3 left-4 h-10 w-10 bg-green-500 rounded-full border-4 border-blue-500'>
          <Image
            src={BrujiAvatar}
            alt='Historia'
            height={40}
            width={40}
            className='object-cover rounded-full border-2 border-blue-600'
          />
        </div>
      </div>
      <div className='mt-2 relative'>
        <Image
          src={CapHistory}
          alt='Historia'
          height={200}
          width={110}
          className='object-cover rounded-2xl'
        />
        <span className='z-10 absolute bottom-3 left-0 right-0 m-auto text-center text-white font-medium'>
          Capitan America
        </span>
        <div className='absolute top-3 left-4 h-10 w-10 bg-green-500 rounded-full border-4 border-blue-500'>
          <Image
            src={CapAvatar}
            alt='Historia'
            height={40}
            width={40}
            className='object-cover rounded-full border-2 border-blue-600'
          />
        </div>
      </div>
    </div>
  )
}

export default HistoryCard
