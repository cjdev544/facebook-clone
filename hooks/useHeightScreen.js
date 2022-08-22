import { useEffect, useState } from 'react'

const useHeightScreen = () => {
  const [viewportHeight, setViewportHeight] = useState(null)
  const [completeHeight, setCompleteHeight] = useState(null)

  useEffect(() => {
    if (window) {
      const height = window.innerHeight - 56

      setViewportHeight(height)
      setCompleteHeight(window.innerHeight)
    }
  }, [])

  return { viewportHeight, completeHeight }
}

export default useHeightScreen
