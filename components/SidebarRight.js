import useHeightScreen from '../hooks/useHeightScreen'

const SidebarRight = () => {
  const { viewportHeight } = useHeightScreen()

  return (
    <aside
      style={{ height: viewportHeight }}
      className='overflow-y-scroll p-2 max-w-[600px] xl:min-w-[300px] scrollbar-hide bg-red-300'
    >
      <h2>SidebarRight</h2>
    </aside>
  )
}

export default SidebarRight
