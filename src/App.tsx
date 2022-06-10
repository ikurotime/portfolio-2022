import AboutSection from './components/Sections/AboutSection'
import DotRing from './components/Common/DotRing'
import Footer from './components/Sections/Footer'
import Header from './components/Sections/Header'
import Navbar from './components/Sections/Navbar'
import TechSection from './components/Sections/TechSection'
import { isMobile } from 'react-device-detect'

function App() {
  return (
    <div className='text-center bg-[#f7f8fb] dark:bg-slate-700 dark:text-white bg-pattern dark:bg-patternDark'>
      {!isMobile && <DotRing />}
      <Navbar />
      <Header />
      <AboutSection />
      <TechSection/>
      <Footer />
    </div>
  )
}

export default App
