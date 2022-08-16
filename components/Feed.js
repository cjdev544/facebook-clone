import useHeightScreen from '../hooks/useHeightScreen'
import Histories from './Histories'
import InputPublication from './InputPublication'
import Posts from './Posts'

const Feed = () => {
  const { viewportHeight } = useHeightScreen()

  return (
    <section
      style={{ height: viewportHeight }}
      className='overflow-y-scroll pt-4 pb-5 h-screen mx-auto scrollbar-hide'
    >
      <Histories />
      <InputPublication />
      <Posts />
    </section>
  )
}

export default Feed
