import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import usePosts from '../hooks/usePosts'

const Photos = ({ userPage }) => {
  const { realTimePosts, loading } = usePosts()
  const [posts, setPosts] = useState()

  useEffect(() => {
    const photoUser = realTimePosts?.filter(
      (post) => post.user === userPage.uid
    )
    setPosts(photoUser)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  if (loading) return null

  const postsWithImage = posts?.filter((post) => post?.image)

  return (
    <section className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-2 mt-4'>
      {postsWithImage?.map((post) => (
        <Link key={post.id} href={`/${post.user}/${post.id}`}>
          <a>
            <Image
              src={post.image}
              height={200}
              width={200}
              alt='imagen del post'
              objectFit='none'
              className='rounded-lg min-w-full'
            />
          </a>
        </Link>
      ))}
    </section>
  )
}

export default Photos
