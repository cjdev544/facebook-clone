const HeaderIcon = ({ Icon, active }) => {
  return (
    <div
      className={`flex items-center cursor-pointer md:px-8 sm:h-14 md:hover:bg-gray-100 rounded-xl group ${
        active &&
        'border-b-4 border-blue-500 rounded-none md:hover:bg-transparent'
      }`}
    >
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && 'text-blue-500'
        }`}
      />
    </div>
  )
}

export default HeaderIcon
