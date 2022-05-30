import { useContext, useEffect, useState } from 'react'

import { MouseContext } from './MouseContext'

function LinkedInIcon({ height, width, color, colorHover }) {
  const [linkHover, setLinkHover] = useState(false)
  const { cursorChangeHandler } = useContext(MouseContext)

  useEffect(() => {
    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        if (el.href.includes('linkedin')) {
          el.addEventListener('mouseover', () => setLinkHover(true))
          el.addEventListener('mouseout', () => setLinkHover(false))
        }
      })
    }

    addLinkEvents()
  }, [])

  return (
    <a
      href='https://www.linkedin.com/in/david-huertas-ortiz'
      target='_blank'
      rel='noopener noreferrer'
      id='LinkedIn'
      onMouseEnter={() => cursorChangeHandler('hovered')}
      onMouseLeave={() => cursorChangeHandler('')}
    >
      <svg
        className={`h-${height} w-${width} dark:fill-slate-200 transition-all`}
        fill={`${linkHover ? colorHover : color}`}
        viewBox='0 0 24 24'
      >
        <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
      </svg>
    </a>
  )
}
LinkedInIcon.defaultProps = {
  height: '6',
  width: '6',
  colorHover: '#111',
  color: '#111'
}

export default LinkedInIcon
