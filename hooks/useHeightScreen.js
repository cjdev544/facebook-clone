import { useEffect, useState } from 'react'

const useHeightScreen = () => {
  const [viewportHeight, setViewportHeight] = useState(null)

  useEffect(() => {
    if (window) {
      const height = window.innerHeight - 56 - 17

      setViewportHeight(height)
    }
  }, [])

  return { viewportHeight }
}

export default useHeightScreen
