import React, { useContext, useEffect, useState } from 'react'

import { MouseContext } from './MouseContext'
import useMousePosition from '../hooks/useMousePosition'

export default function DotRing() {
  // 1.
  const { cursorType, cursorChangeHandler } = useContext(MouseContext)

  const [click, setClick] = useState(false)
  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousedown', mDown)
      document.addEventListener('mouseup', mUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener('mousedown', mDown)
      document.removeEventListener('mouseup', mUp)
    }

    const mDown = () => {
      setClick(true)
    }

    const mUp = () => {
      setClick(false)
    }

    addEventListeners()
    return () => removeEventListeners()
  }, [])
  const { clientX, clientY } = useMousePosition()
  return (
    <>
      <div
        className={
          'transition-transform dot ' + cursorType + (click ? 'clicked' : ' ')
        }
        style={{ left: `${clientX}px`, top: `${clientY}px` }}
      ></div>
    </>
  )
}
