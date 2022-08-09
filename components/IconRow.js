import React from 'react'

const IconRow = ({ Icon, title }) => {
  return (
    <div className='flex cursor-pointer p-3 hover:bg-gray-200 rounded-lg'>
      <Icon className='h-6 text-blue-500 mr-3' />
      <p className='hidden md:inline font-semibold'>{title}</p>
    </div>
  )
}

export default IconRow
