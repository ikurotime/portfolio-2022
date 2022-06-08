import AboutSection from './components/AboutSection'
import DotRing from './components/DotRing'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='text-center bg-[#f7f8fb] dark:bg-slate-700 dark:text-white bg-pattern dark:bg-patternDark'>
      <DotRing />
      <Navbar />
      <Header />
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App
