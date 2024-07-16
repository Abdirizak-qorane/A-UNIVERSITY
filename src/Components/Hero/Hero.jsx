import React from 'react'
import'./Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>HELLO WELCOME TO ALPHA UNIVERSITY</h1>
            <p>Through the role that education plays in the mental and intellectual 
                advancement of individuals, it also helps in the physical,
                 emotional and spiritual growth of the persons</p>
                 <button className='btn'>Explore more<img src={dark_arrow} alt=""/></button>
        </div>
      
    </div>
  )
}

export default Hero
