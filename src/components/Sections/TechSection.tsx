import { Arrow3 } from '../Common/Arrow';
import TechStack from '../Common/TechStack';
export default function TechSection() {
  return (
    <section className="relative flex flex-col items-center min-h-screen px-10 mt-48 sm:mt-0 ">
        <div className='flex flex-col-reverse items-center justify-center w-full md:flex-row'>
        <TechStack />
        <div className='grid place-items-center'>
      <h2 className='my-10 text-4xl sm:text-5xl font-bold border-b-8 border-solid border-[#e63946] w-fit'>TECHNOLOGIES</h2>
        <p className='text-xl md:text-2xl max-w-[50ch] font-bold'>
          These are a few technologies I've worked and im comfortable with
           since I started Web Development. I love React. Currently, im learning TypeScript.</p>
        </div>
        </div>
    <Arrow3/>
      </section>
  )
}