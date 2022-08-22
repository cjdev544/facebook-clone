import InputProfileMessage from './InputProfileMessage'
import Posts from './Posts'

const ProfileRight = ({ userPage }) => {
  return (
    <div className='sm:w-3/5 mt-5 sm:ml-5'>
      <InputProfileMessage userPage={userPage} />
      <Posts userPage={userPage} />
    </div>
  )
}

export default ProfileRight
