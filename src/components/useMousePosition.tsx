import { useEffect, useState } from 'react'

export default function useMousePosition() {
  interface MousePosition {
    clientX: number | null
    clientY: number | null
  }
  const [mousePosition, setMousePosition] = useState({
    clientX: null,
    clientY: null
  } as MousePosition)
  useEffect(() => {
    const mouseMoveHandler = (event: MousePosition) => {
      const { clientX, clientY } = event
      setMousePosition({ clientX, clientY })
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return mousePosition
}
