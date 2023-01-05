const Friends = ({ friends }) => {
  if (friends?.length === 0) return null
  console.log({ friends })

  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.uid}>
          <div className='flex'>
            <div className='flex gap-3'>
              imagen
              <p>nombre</p>
            </div>
            eliminar
          </div>
        </div>
      ))}
    </div>
  )
}

export default Friends
