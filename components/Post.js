import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/solid'
import {
  ChatAltIcon,
  ThumbUpIcon as ThumbUpIconOutline,
} from '@heroicons/react/outline'

import useAuth from '../hooks/useAuth'
import usePosts from '../hooks/usePosts'
import AvatarNoFound from '../public/avatar.png'

const Post = ({ post }) => {
  const { name, email, avatar, message, image, createdAt } = post

  const { authUser } = useAuth()
  const { likeAPost } = usePosts()

  const likes = post?.likes
  const countLikes = likes?.length
  const isUserLikePost = likes?.filter((like) => like === authUser.uid)

  return (
    <article className='p-3 pb-0 bg-white mt-5 rounded-xl shadow-md'>
      <header>
        <div className='flex hover:bg-gray-200 rounded-lg'>
          <Image
            src={avatar || AvatarNoFound}
            width={40}
            height={40}
            layout='fixed'
            alt='Avatar de usuario que creo el post'
            className='rounded-full cursor-pointer'
          />
          <div>
            <p className='font-semibold ml-2 cursor-pointer'>{name}</p>
            <p className='text-xs text-gray-400 ml-3'>
              {new Date(createdAt?.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
      </header>
      {message && <p className='my-2'>{message}</p>}
      {image && (
        <div className='relative h-56 md:h-96 bg-white'>
          <Image
            src={image}
            objectFit='contain'
            alt='Imagen del post'
            layout='fill'
          />
        </div>
      )}
      <footer>
        <div className='flex items-center justify-between py-3 border-gray-200 border-b-2'>
          <div className='flex items-center'>
            <div className='flex mr-2 p-1 items-center justify-center bg-blue-500 rounded-full text-center'>
              <ThumbUpIcon className='h-3 text-center text-white' />
            </div>
            <p className='text-gray-400'>{countLikes || ''}</p>
          </div>
          <p className='text-gray-400'>45 comentarios</p>
        </div>
        <div className='flex px-3 py-1 items-center justify-between'>
          <div
            onClick={() =>
              likeAPost(post, authUser.uid, isUserLikePost?.length)
            }
            className='flex items-center hover:bg-gray-100 py-1 px-4 cursor-pointer'
          >
            <ThumbUpIconOutline
              className={`h-5 mr-1 ${
                isUserLikePost?.length !== 1 ? 'text-gray-500' : 'text-blue-500'
              }`}
            />
            <p
              className={`font-semibold ${
                isUserLikePost?.length !== 1 ? 'text-gray-500' : 'text-blue-500'
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
      </footer>
    </article>
  )
}

export default Post
