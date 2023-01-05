import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import { DocumentAddIcon, PhotographIcon, XIcon } from '@heroicons/react/solid'
import InputEmoji from 'react-input-emoji'

import useAuth from '../../hooks/useAuth'
import usePosts from '../../hooks/usePosts'

const PostModalProfile = ({
  isAuthUser,
  showDivImage,
  setShowModal,
  setShowDivImage,
}) => {
  const { authUser } = useAuth()
  const { createNewPost } = usePosts()
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)
  const [file, setFile] = useState(null)

  const element = useRef()

  const name = authUser?.displayName.split(' ')[0]

  const closeModal = (e) => {
    if (!element.current.contains(e.target)) {
      setShowModal(false)
      setShowDivImage(false)
    }
  }

  const xCloseModal = (e) => {
    setShowModal(false)
    setShowDivImage(false)
  }

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    setFile(file)
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = (renderEvent) => {
      setImage(renderEvent.target.result)
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    onDrop,
  })

  const inputImage = () => {
    setShowDivImage(true)
  }

  const closeImage = () => {
    if (image) {
      setImage(null)
      setFile(null)
    } else {
      setShowDivImage(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // API call here
    if (isAuthUser) {
      const dataPost = {
        user: authUser.uid,
        message: text,
        name: authUser?.displayName,
        email: authUser?.email,
        avatar: authUser?.photoURL,
        image: !file && null,
      }
      await createNewPost(dataPost, file)
    } else {
      console.log('mandar mensaje a usuario')
    }
    setText('')
    setShowModal(false)
  }

  return (
    <section
      className='fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 m-auto z-40 white-modal'
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
            onClick={xCloseModal}
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
            placeholder='Escribe algo a User...'
            height='20'
            theme='light'
          />
          {showDivImage && (
            <div className='relative'>
              <div onClick={closeImage} className='absolute z-50 top-4 right-4'>
                <XIcon className='h-6 w-6 text-gray-500 bg-white rounded-full border-2 border-gray-500 cursor-pointer' />
              </div>
              <div
                {...getRootProps()}
                className='bg-no-repeat bg-center bg-contain h-[10rem] border-2 border-gray-200 rounded-lg mt-5 cursor-pointer'
                style={{ backgroundImage: `url('${image}')` }}
              >
                <input {...getInputProps()} />
                {!image && (
                  <div className='flex flex-col items-center justify-center bg-gray-100 p-8 m-2'>
                    <DocumentAddIcon className='h-10 w-10' />
                    <p className='font-semibold'>Agregar fotos/videos</p>
                    <p className='font-light text-gray-500'>
                      o arrastra y suelta
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className='flex items-center p-3 mt-2 rounded-lg border-2 border-gray-200'>
            <p className='text-semibold'>Agregar a tu publicación</p>
            <PhotographIcon
              className='h-8 w-8 ml-4 text-green-500 cursor-pointer'
              onClick={inputImage}
            />
          </div>
          <input
            type='submit'
            className={
              text !== '' || image
                ? 'text-center text-white bg-blue-500 hover:bg-blue-300 w-full py-2 mt-4 rounded-lg font-semibold cursor-pointer'
                : 'text-center text-gray-300 bg-gray-100  w-full py-2 mt-4 rounded-lg font-semibold'
            }
            disabled={text === ''}
            value='Publicar'
          />
        </form>
      </div>
    </section>
  )
}

export default PostModalProfile
