import { useContext, useEffect, useState } from 'react'

import GithubInIcon from '../Common/GithubIcon'
import LinkedInIcon from '../Common/LinkedInIcon'
import { MouseContext } from '../Common/MouseContext'

export default function Navbar() {
  const [scroll, setScroll] = useState(false)
  const changeBackground = () => {
    setScroll(window.scrollY >= 5)
  }

  const { cursorChangeHandler } = useContext(MouseContext)
  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  }, [])

  return (
    <div
      className={`flex justify-between gap-5 p-5 font-bold transition-colors ${
        scroll ? 'bg-gray-100 dark:bg-slate-800 ' : ''
      } sticky top-0 z-20`}
    >
      <div className='hidden col-span-2 gap-5 md:flex md:flex-row'>
        <a
          href='#'
          className='hover:bg-[#e63946] rounded p-1 hover:text-white'
          onMouseEnter={() => cursorChangeHandler('hovered')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          ABOUT
        </a>
        <a
          href='#'
          className='hover:bg-[#e63946] rounded p-1 hover:text-white '
          onMouseEnter={() => cursorChangeHandler('hovered')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          CONTACT
        </a>
        <a
          href='#'
          className='hover:bg-[#e63946] rounded p-1 hover:text-white'
          onMouseEnter={() => cursorChangeHandler('hovered')}
          onMouseLeave={() => cursorChangeHandler('')}
        >
          WORK
        </a>
      </div>
      <div className='flex md:hidden'>
        <div className='space-y-2'>
          <span className='block w-6 h-0.5 bg-gray-600 dark:bg-slate-200 animate-pulse'></span>
          <span className='block w-6 h-0.5 bg-gray-600 dark:bg-slate-200 animate-pulse'></span>
          <span className='block w-6 h-0.5 bg-gray-600 dark:bg-slate-200 animate-pulse'></span>
        </div>
      </div>
      <div className='flex col-start-2 gap-3 '>
        <LinkedInIcon colorHover='#e63946' color='#111' />
        <GithubInIcon colorHover='#e63946' color='#111' />
      </div>
    </div>
  )
}
