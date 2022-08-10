import { useRef, useState } from 'react'
import Image from 'next/image'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { PhotographIcon, XIcon } from '@heroicons/react/solid'
import InputEmoji from 'react-input-emoji'

import useAuth from '../../hooks/useAuth'

const PostModal = ({ setShowModal }) => {
  const { authUser } = useAuth()
  const [text, setText] = useState('')

  const element = useRef()

  const name = authUser?.displayName.split(' ')[0]

  const closeModal = (e) => {
    if (!element.current.contains(e.target)) setShowModal(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text)
    // API call here
    setText('')
    setShowModal(false)
  }

  return (
    <section
      className='absolute flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto z-40 white-modal'
      onClick={closeModal}
    >
      <div
        className='bg-white shadow-xl p-5 rounded-md w-[500px] m-1 z-50'
        ref={element}
      >
        <div className='relative'>
          <p className='text-center font-bold text-xl border-gray-200 pb-5  border-b-2'>
            Crear publicación
          </p>

          <div
            className='absolute -top-1 right-0 flex items-center justify-center h-8 w-8 rounded-full bg-gray-200'
            onClick={() => setShowModal(false)}
          >
            <XIcon className='h-6 w-6 text-gray-500 cursor-pointer' />
          </div>
        </div>
        <div className='flex p-3 rounded-lg'>
          <Image
            src={authUser?.photoURL ? authUser.photoURL : AvatarNoFound}
            width={40}
            height={40}
            layout='fixed'
            alt='Avatar de usuario'
            className='rounded-full cursor-pointer'
          />
          <p className='hidden md:inline font-semibold ml-2'>
            {authUser?.displayName}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            placeholder={`¿Qué estás pensando?, ${name}`}
            height='20'
            theme='light'
          />
          <div className='flex items-center p-3 mt-2 rounded-lg border-2 border-gray-200'>
            <p className='text-semibold'>Agregar a tu publicación</p>
            <PhotographIcon className='h-8 w-8 ml-4 text-green-500 cursor-pointer' />
          </div>
          <button
            type='submit'
            className={
              text !== ''
                ? 'text-center text-white bg-blue-500 hover:bg-blue-300 w-full py-2 mt-4 rounded-lg font-semibold'
                : 'text-center text-gray-300 bg-gray-100  w-full py-2 mt-4 rounded-lg font-semibold'
            }
            disabled={text === ''}
          >
            Publicar
          </button>
        </form>
      </div>
    </section>
  )
}

export default PostModal
