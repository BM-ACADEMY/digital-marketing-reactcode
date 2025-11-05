import React from 'react'
// import Navbar from './digitalmarketing/Navbar'
import Hero from './digitalmarketing/Hero'
import UnlockSection from './digitalmarketing/UnlockSection'
import WhoShouldJoin from './digitalmarketing/WhoShouldJoin'
import HowToRegister from './digitalmarketing/HowToRegister'
import Gallery from './digitalmarketing/Gallery'
import Testimonials from './digitalmarketing/Testimonials'
import Footer from './digitalmarketing/Footer'
import { DiscoverSection, WhyAttend } from './digitalmarketing/WhyAttend'
import FinalCallToAction from './digitalmarketing/FinalCallToAction'
import FloatingWhatsAppButton from './digitalmarketing/FloatingWhatsAppButton'

const App = () => {
  return (
    <div>
      <Hero/>
      <UnlockSection/>
      <WhyAttend/>
      <DiscoverSection/>
      <WhoShouldJoin/>
      <HowToRegister/>
      <Gallery/>
      <FinalCallToAction/>
      <Testimonials/>
      <FloatingWhatsAppButton/>
      <Footer/>
    </div>
  )
}

export default App