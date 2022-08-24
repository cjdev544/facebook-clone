import Link from 'next/link'
import Image from 'next/image'
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon } from '@heroicons/react/outline'

import useAuth from '../hooks/useAuth'
import Logo from '../public/logo.png'
import HeaderIcon from './HeaderIcon'
import AvatarNoFound from '../public/avatar.png'

const Header = () => {
  const { authUser, logout } = useAuth()

  return (
    <header className='sticky top-0 z-40 bg-white shadow-md'>
      <div className='max-w-7xl mx-auto flex items-center lg:px-5 h-[55px] top-0'>
        {/* Left */}
        <div className='flex items-center'>
          <Link href='/'>
            <a>
              <Image
                src={Logo}
                alt='Logo'
                width={40}
                height={40}
                layout='fixed'
                className='cursor-pointer'
              />
            </a>
          </Link>
          <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
            <SearchIcon className='h-6 text-gray-600' />
            <input
              className='hidden md:inline-flex items-center bg-transparent ml-2 outline-none placeholder-gray-500 flex-shrink'
              type='text'
              placeholder='Buscar en Facebook'
            />
          </div>
        </div>

        {/* Center  */}
        <div className='flex justify-center flex-grow'>
          <div className='flex space-x-6 md:space-x-2'>
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        {/* Right  */}
        <div className='flex items-center sm:space-x-2 justify-end'>
          <ViewGridIcon className='icon' />
          <ChatIcon className='icon' />
          <BellIcon className='icon' />

          <div onClick={logout} className='flex items-center ml-2'>
            <Image
              src={authUser?.photoURL ? authUser.photoURL : AvatarNoFound}
              width={40}
              height={40}
              layout='fixed'
              alt='Avatar de usuario'
              className='rounded-full cursor-pointer'
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
