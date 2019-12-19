import { useEffect, useState } from 'react'

const useGetWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const screenWidth = () => setWidth(window.innerWidth)
    window.addEventListener('resize', screenWidth)
    return () => {
      window.removeEventListener('resize', screenWidth)
    }
  })

  return width
}

export default useGetWidth