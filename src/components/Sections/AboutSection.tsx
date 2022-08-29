import { Arrow2 } from "../Common/Arrow";
import david from '../../img/david.jpg'
export default function AboutSection() {
  return (
    <section id="about" className='relative grid items-start h-auto grid-cols-1 gap-5 px-10 lg:my-0 md:grid-cols-2 place-items-center'>
      <div className='grid gap-5 place-items-center'>
        <h2 className='my-10 text-5xl font-bold border-b-8 border-solid border-[#e63946] w-fit'>ABOUT ME</h2>
        <p className='md:text-xl lg:text-2xl max-w-[50ch] font-bold'>
          I'm David, a passionate full-stack developer* based in  Madrid, who loves
          to code everything he can. <br /> Always learning, my goal is to
          expand my knowlegde and grow as a developer. When I'm not coding I
          like to read at my kindle and a cup of hot chocolate.
        </p>
        <p className="font-bold">*I do what I can</p>
      </div>
      <img className="rounded-3xl" src={david} alt='david' loading='lazy' width={400} />
      <Arrow2/>
    </section>
  )
}
