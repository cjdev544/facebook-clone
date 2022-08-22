import Image from 'next/image'
import Link from 'next/link'

import AvatarNoFound from '../public/avatar.png'

const AvatarName = ({ user }) => {
  return (
    <div className='flex p-3 hover:bg-gray-200 rounded-lg cursor-pointer'>
      <Link href={`/${user.uid}`}>
        <a>
          <Image
            src={user?.photoURL ? user.photoURL : AvatarNoFound}
            width={30}
            height={30}
            layout='fixed'
            alt='Avatar de usuario'
            className='rounded-full'
          />
          <p className='hidden md:inline font-semibold ml-2'>
            {user?.displayName}
          </p>
        </a>
      </Link>
    </div>
  )
}

export default AvatarName
