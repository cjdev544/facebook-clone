import InputProfileMessage from './InputProfileMessage'
import Posts from './Posts'

const ProfileRight = () => {
  return (
    <div className='sm:w-3/5 mt-5 sm:ml-5'>
      <InputProfileMessage />
      <Posts />
    </div>
  )
}

export default ProfileRight
