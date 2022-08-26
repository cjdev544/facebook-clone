import Image from 'next/image'

import useUser from '../hooks/useUser'
import useHeightScreen from '../hooks/useHeightScreen'
import ImageInstagram from '../public/bruce-avatar.jpg'
import AvatarName from './AvatarName'

const SidebarRight = () => {
  const { viewportHeight } = useHeightScreen()
  const { friends, noFriends } = useUser()

  const user = {
    displayName: 'Usuario de prueba',
    photoURL: ImageInstagram,
  }
  console.log('Amigos', friends)
  console.log('no amigos', noFriends)

  return (
    <aside
      style={{ height: viewportHeight }}
      className='overflow-y-scroll p-2 max-w-[600px] xl:min-w-[300px] scrollbar-hide pt-5 pl-10'
    >
      <h2 className='text-gray-500 font-bold'>Publicidad</h2>
      <div className='flex items-center py-4 border-gray-200 border-b-2'>
        <Image
          src={ImageInstagram}
          height={100}
          width={100}
          alt='Imagen de publicidad'
          objectFit='cover'
          className='rounded-lg'
        />
        <div className='ml-2'>
          <p>Clon de Instagram</p>
          <p className='text-sm text-gray-400'>instagram.com</p>
        </div>
      </div>
      <h2 className='text-gray-500 font-bold mt-5'>Contactos</h2>
      {friends?.length === 0 ? (
        <p className='text-center font-semibold'>Sin contactos</p>
      ) : (
        friends.map((user) => <AvatarName key={user.uid} user={user} />)
      )}

      <h2 className='text-gray-500 font-bold pt-5 border-t-2 border-gray-200'>
        Sugeridos
      </h2>
      {noFriends.length === 0 && (
        <p className='text-center font-semibold'>No hay sugerencias</p>
      )}
      {noFriends.length !== 0 &&
        noFriends.map((user) => <AvatarName key={user.uid} user={user} />)}
    </aside>
  )
}

export default SidebarRight
