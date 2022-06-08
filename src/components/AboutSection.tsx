export default function AboutSection() {
  return (
    <section className='grid h-[80vh] grid-cols-1 md:grid-cols-2 gap-5 px-20 place-items-center'>
      <div className='gap-5'>
        <h2 className='my-10 text-5xl font-bold'>ABOUT ME</h2>
        <p className='text-xl md:text-2xl max-w-[50ch]'>
          I'm David, a passionate full-stack developer* from Madrid, who loves
          to code everything he can. <br /> Always learning, my goal is to
          expand my knowlegde and grow as a developer. When I'm not coding I
          like to read at my kindle and a cup of hot chocolate.
        </p>
        <p>*I do what I can</p>
      </div>
      <img src='/src/david.jpg' alt='david' loading='lazy' width={400} />
    </section>
  )
}
