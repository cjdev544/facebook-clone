import React from 'react'

const IconRow = ({ Icon, title, color }) => {
  return (
    <div className='flex cursor-pointer p-3 hover:bg-gray-200 rounded-lg'>
      <Icon className={`h-6 mr-3 ${!color ? 'text-blue-500' : color}`} />
      <p className='hidden md:inline font-semibold'>{title}</p>
    </div>
  )
}

export default IconRow
