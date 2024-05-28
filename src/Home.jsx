import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Choose from './components/choose/Choose'
import VisionTimeline from './components/VisionTimeline'
import Blogs from './components/Blogs'
import ByNumbers from './components/ByNumbers'
import KnowUs from './components/KnowUs'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function Home() {
  return (
    <div className=' bg-black'>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Choose/>
      <VisionTimeline/>
      <Blogs/>
      <ByNumbers/>
      <KnowUs/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home
