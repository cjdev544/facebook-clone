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
import IconRow from './IconRow'

const Sidebar = () => {
  const { authUser } = useAuth()

  return (
    <aside className='p-2 max-w-[600px] xl:min-w-[300px]'>
      <div className='flex p-2'>
        <Image
          src={authUser?.photoURL ? authUser.photoURL : AvatarNoFound}
          width={30}
          height={30}
          layout='fixed'
          alt='Avatar de usuario'
          className='rounded-full cursor-pointer'
        />
        <p className='font-semibold ml-2 cursor-pointer'>
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

export default Sidebar
