import Image from 'next/image'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import Logo from '../public/logo.png'
import HeaderIcon from './HeaderIcon'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* Left */}
      <div className='flex items-center'>
        <Image src={Logo} alt='Logo' width={40} height={40} layout='fixed' />
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
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Rigth  */}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile picture */}
        {/* <Image src='../public/perfil.jpg' alt='Avatar de usuario' /> */}
        <p className='whitespace-nowrap font-semibold pr-3'>
          Jefferson Camppos
        </p>
        <ViewGridIcon className='icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
      </div>
    </header>
  )
}

export default Header
