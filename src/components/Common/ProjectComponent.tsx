import { useContext, useEffect, useState } from 'react'

import GithubInIcon from './GithubIcon'
import { MouseContext } from './MouseContext'
import useImage from '../hooks/useImage'

export default function ProjectComponent({title,techStack,description,github,img,link}: {title: string, techStack: string, description: string, github: string | undefined, img: string, link: string}) {
  const [linkHover, setLinkHover] = useState(false)
  const { cursorChangeHandler } = useContext(MouseContext)
  const {image} = useImage(img)
  useEffect(() => {
    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        if (el.id.includes('project')) {
          el.addEventListener('mouseover', () => setLinkHover(true))
          el.addEventListener('mouseout', () => setLinkHover(false))
        }
      })
    }

    addLinkEvents()
  }, [])
  return (
    <div className="w-full h-full grid place-items-center p-5 gap-3 transition-all border-8 border-solid rounded-1xl bg-[#ffffff] dark:border-slate-800 dark:bg-slate-800 hover:scale-110 hover:bg-[#f1616d] hover:border-[#f1616d]">
    <img src={image} alt="Discord" className='object-cover rounded aspect-video' />
    <p className='text-xl font-bold'>{title}</p>
    <p className='italic'>{techStack}</p>
    <p>{description}</p>
    <div className="flex flex-row" >
     <a href={link} onMouseEnter={() => cursorChangeHandler('hovered')} target='_blank'
      onMouseLeave={() => cursorChangeHandler('')}  id='project-visit' className="px-4 py-2 font-bold text-white rounded-full bg-slate-800 dark:bg-[#494949]">
        Visit 
      </a> 
     {github &&  <a href={github} onMouseEnter={() => cursorChangeHandler('hovered')} target='_blank'
      onMouseLeave={() => cursorChangeHandler('')} id='project-code' className="flex gap-2 px-4 py-2 ml-4 font-bold rounded-full bg-slate-200 dark:text-black ">
        Code  <GithubInIcon darkColor='bg-black' />
      </a>}
    </div>
    
 </div>
 

  )
}
