import { useState } from 'react'
import Navbar from '../src/Components/Navbar'
import { Nav } from 'react-bootstrap'
import Hero from '../src/Components/Hero'
import About from '../src/Pages/About'
import Career from './Pages/Career'
import Contact from '../src/Pages/Contact'
import Expertise from "../src/Pages/Expertise";
import Footer from '../src/Components/footer'
import Work from '../src/Pages/Work'
import Fullstack from '../src/Pages/FullStack'
export default function App() {
  return(
    <>
    <Navbar />
    <Hero />
    <About />
    <Career />
    <Expertise />
    <Work />
    <Fullstack />
    <Contact />
    <Footer />
    </>
  )
  

}