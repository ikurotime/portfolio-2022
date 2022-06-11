import { Arrow } from '../Common/Arrow'
import Marquee from 'react-fast-marquee'
import webdev from '../../img/WebDev.svg'

export default function Header() {
  return (
    <div className='relative overflow-x-hidden '>
      <Arrow/>
      <Marquee
        className='rotate-[-2deg] left-[-10px] mt-5'
        gradient={false}
        speed={150}
        style={{ width: '130%' }}
      >
        <span
          className='h-full text-[70px] sm:text-[60px] md:text-[80px] lg:text-[100px] break-words font-bold 
         border-y-[20px] md:border-y-[30px] lg:border-y-[40px] border-[#e63946]'
        >
          DEVELOPER // DESIGNER // DEVELOPER // DESIGNER // DEVELOPER //
          DESIGNER // DEVELOPER // DESIGNER // DEVELOPER // DESIGNER //
        </span>
      </Marquee>
      <header className='grid w-full h-[70vh] mt-5 overflow-x-hidden text-center md:-mt-16 place-items-center '>
        <div className='grid self-start justify-around w-full grid-cols-1 text-5xl font-bold text-left sm:w-8/12 md:grid-rows-1 md:grid-cols-2 place-items-center md:mt-32 lg:mt-24 lg:text-7xl'>
          <div>
            <span>
              HELLO,
              <br /> I'M
            </span>
            <br />
            <span>
              DAVID
              <br />
              HUERTAS
            </span>
          </div>
          <img
            className='relative w-full max-w-lg overflow-hidden'
            src={webdev}
            alt='david huertas'
          />
        </div>
      </header>
    </div>
  )
}
