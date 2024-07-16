import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's leaders today</h2>
        <p>Universities are institutions of higher education and research,
             which grant academic degrees in various disciplines. 
             They play a pivotal role in shaping the intellectual,
              social, and economic landscapes of societies. Historically,
               universities have been centers of knowledge and innovation, 
                The modern university system evolved significantly during the 
                 with institutions like the University of Bologna, 
                 and the University of Oxford leading the way.</p>      
      </div>
    </div>
  )
}

export default About
