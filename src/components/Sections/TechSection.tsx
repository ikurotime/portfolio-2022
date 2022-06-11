import { Arrow3 } from '../Common/Arrow';
import TechStack from '../Common/TechStack';
export default function TechSection() {
  return (
    <section id="tech" className="relative flex flex-col items-center h-auto px-10 lg:mt-0 ">
        <div className='flex flex-col-reverse items-center justify-center w-full md:flex-row'>
        <TechStack />
        <div className='grid place-items-center'>
      <h2 className='my-10 text-4xl md:text-5xl font-bold border-b-8 border-solid border-[#e63946] w-fit'>TECHNOLOGIES</h2>
        <p className='md:text-xl lg:text-2xl max-w-[50ch] font-bold'>
          These are a few technologies I've worked and I'm comfortable with
           since I started Web Development. I love React. Currently, I'm learning TypeScript.</p>
        </div>
        </div>
    <Arrow3/>
      </section>
  )
}