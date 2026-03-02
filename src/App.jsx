import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom' 
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/hero'
import { motion, useScroll } from 'framer-motion'
import Parallax from './components/parallax/Parallax'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/Cursor/Cursor'
function App() {
  const {scrollYProgress}=useScroll();
  return (
    <>
      {/* <motion.div 
  style={{
    scaleX: scrollYProgress
  }}
  className='bg-yellow-400 origin-left w-full h-5 fixed bottom-0 left-0'></motion.div> */}
  
    <section id='About Me'>
        <Cursor/>
      <Navbar/>
      <Hero/>
    </section>



    <section id='Services'><Parallax type="services" /></section>
    <section> <Services/>  </section>
    <section id='Portfolio'> <Parallax type="portfolio" />  </section>
     <div className='portfolioApp'> <Portfolio/></div>

    <section id='Contact'> <Contact/> </section>
  
    </>
  )
}

export default App
