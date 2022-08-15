import Image from 'next/image'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

import useAuth from '../hooks/useAuth'
import useHeightScreen from '../hooks/useHeightScreen'
import IconRow from './IconRow'
import AvatarNoFound from '../public/avatar.png'

const SidebarLeft = () => {
  const { authUser } = useAuth()
  const { viewportHeight } = useHeightScreen()

  return (
    <aside
      style={{ height: viewportHeight }}
      className='overflow-y-scroll p-2 max-w-[600px] xl:min-w-[300px] scrollbar-hide'
    >
      <div className='flex p-3 hover:bg-gray-200 rounded-lg'>
        <Image
          src={authUser?.photoURL ? authUser.photoURL : AvatarNoFound}
          width={30}
          height={30}
          layout='fixed'
          alt='Avatar de usuario'
          className='rounded-full cursor-pointer'
        />
        <p className='hidden md:inline font-semibold ml-2 cursor-pointer'>
          {authUser?.displayName}
        </p>
      </div>
      <IconRow Icon={UsersIcon} title='Amigos' />
      <IconRow Icon={UserGroupIcon} title='Grupos' />
      <IconRow Icon={ShoppingBagIcon} title='Marketplace' />
      <IconRow Icon={DesktopComputerIcon} title='Watch' />
      <IconRow Icon={CalendarIcon} title='Eventos' />
      <IconRow Icon={ClockIcon} title='Recuerdos' />
      <IconRow Icon={ChevronDownIcon} title='Ver más' />
    </aside>
  )
}

export default SidebarLeft
