import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testmonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      <Title subTitle= 'Our Program' title='what we over'/>
      <Program />
      <About/>
      <Title subTitle= 'Gallery' title='Compus photos'/>
      <Campus/>
      <Title subTitle= 'Testmonials' title='what student says'/>
      <Testimonials/>
      <Title subTitle= 'Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}
export default App
