import React from 'react'
import { Navbar } from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
// import Experience from './sections/Experience'
const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* navbar */}
      <Navbar />
      {/* hero */}
      <Hero />
      <About />
      <Projects />
      <Contact />
   </div>
  )
}

export default App