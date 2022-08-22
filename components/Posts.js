import ClipLoader from 'react-spinners/ClipLoader'

import usePosts from '../hooks/usePosts'
import Post from './Post'

const Posts = ({ userPage = null }) => {
  const { realTimePosts, loading, error } = usePosts()

  const override = {
    display: 'block',
    margin: '2rem auto',
    borderColor: 'blue',
  }

  if (loading)
    return (
      <ClipLoader
        color='#000'
        loading={true}
        cssOverride={override}
        size={80}
      />
    )

  if (error)
    return (
      <h2 className='text-center font-4xl font-bold mt-10'>
        Error al cargar los posts
      </h2>
    )

  return (
    <div>
      {realTimePosts?.map((post) => {
        if (userPage) {
          if (post.user === userPage.uid) {
            return <Post key={post.id} post={post} />
          }
        } else {
          return <Post key={post.id} post={post} />
        }
      })}
    </div>
  )
}

export default Posts
