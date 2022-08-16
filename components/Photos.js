import Image from 'next/image'

import usePosts from '../hooks/usePosts'

const Photos = () => {
  const { realTimePosts, loading } = usePosts()

  if (loading) return null

  const postsWithImage = realTimePosts.filter((post) => post?.image)
  console.log(postsWithImage)
  return (
    <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-2 mt-4'>
      {postsWithImage?.map((post) => (
        <Image
          key={post.id}
          src={post.image}
          height={200}
          width={200}
          alt='imagen del post'
          objectFit='none'
          className='rounded-lg min-w-full'
        />
      ))}
    </div>
  )
}

export default Photos
