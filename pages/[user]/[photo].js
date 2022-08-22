import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  BellIcon,
  ChatIcon,
  ChatAltIcon,
  ThumbUpIcon,
} from '@heroicons/react/solid'
import {
  XIcon,
  ThumbUpIcon as ThumbUpIconOutline,
} from '@heroicons/react/outline'

import useAuth from '../../hooks/useAuth'
import usePosts from '../../hooks/usePosts'
import useHeightScreen from '../../hooks/useHeightScreen'
import Logo from '../../public/logo.png'
import AvatarNoFound from '../../public/avatar.png'

const Photo = () => {
  const { query } = useRouter()
  const { user, photo } = query
  const { realTimePosts, loading, likeAPost } = usePosts()
  const { authUser } = useAuth()
  const { completeHeight } = useHeightScreen()

  if (loading) return null

  const post = realTimePosts.filter((post) => post?.id === photo)[0]
  const likes = post?.likes
  const countLikes = likes?.length
  const isUserLikePost = likes?.filter((like) => like === authUser.uid)

  return (
    <div className='flex max-h-screen overflow-hidden'>
      <div className='relative w-2/3 bg-black h-screen'>
        <div className='absolute flex top-3 left-3 z-50'>
          <div className='rounded-full h-10 w-10 bg-gray-600 border-2 border-white flex items-center justify-center mr-2'>
            <Link href={`/${user}`}>
              <a>
                <XIcon className='h-5 w-5 text-white' />
              </a>
            </Link>
          </div>
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
        </div>
        <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center z-10'>
          <div className='max-h-screen'>
            <Image
              src={post.image}
              alt='Imagen'
              width={300}
              height={completeHeight}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
      {/* Right */}
      <div className='w-1/3 bg-white border-l-2 border-black'>
        <div className='flex items-center sm:space-x-2 justify-end mt-3 pr-5 pb-3'>
          <div className='h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center'>
            <ChatIcon className='h-6 w-6' />
          </div>
          <div className='h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center'>
            <BellIcon className='h-6 w-6' />
          </div>
          <div className='flex items-center ml-2'>
            <Image
              src={authUser?.photoURL ? authUser.photoURL : AvatarNoFound}
              width={35}
              height={35}
              layout='fixed'
              alt='Avatar de usuario'
              className='rounded-full cursor-pointer'
            />
          </div>
        </div>

        {/***************** */}

        <div className='flex hover:bg-gray-200 pl-5 pb-3'>
          <Image
            src={post?.avatar || AvatarNoFound}
            width={35}
            height={35}
            layout='fixed'
            alt='Avatar de usuario que creo el post'
            className='rounded-full cursor-pointer'
          />
          <div>
            <p className='font-semibold ml-2 cursor-pointer'>{post?.name}</p>
            <p className='text-xs text-gray-400 ml-3'>
              {new Date(post?.createdAt?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>

        {/**************** */}

        <div className='flex items-center border-gray-200 border-b-2 pl-5 pb-3'>
          <div className='flex mr-2 p-1 items-center justify-center bg-blue-500 rounded-full text-center'>
            <ThumbUpIcon className='h-3 text-center text-white' />
          </div>
          <p className='text-gray-400'>{countLikes || ''}</p>
        </div>

        {/***************** */}

        <div className=''>
          <div className='flex px-3 py-1 items-center justify-between border-gray-200 border-b-2 pb-2'>
            <div
              onClick={() =>
                likeAPost(post, authUser.uid, isUserLikePost?.length)
              }
              className='flex items-center hover:bg-gray-100 py-1 px-4 cursor-pointer'
            >
              <ThumbUpIconOutline
                className={`h-5 mr-1 ${
                  isUserLikePost?.length !== 1
                    ? 'text-gray-500'
                    : 'text-blue-500'
                }`}
              />
              <p
                className={`font-semibold ${
                  isUserLikePost?.length !== 1
                    ? 'text-gray-500'
                    : 'text-blue-500'
                }`}
              >
                Me gusta
              </p>
            </div>
            <div className='flex items-center hover:bg-gray-100 py-1 px-4 cursor-pointer'>
              <ChatAltIcon className='h-4 mr-1 text-gray-500' />
              <p className='text-gray-500 font-semibold'>Comentar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo
