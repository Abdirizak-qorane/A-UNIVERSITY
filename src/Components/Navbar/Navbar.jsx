import React, { useLayoutEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useLayoutEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>program</li>
        <li>About</li>
        <li>Compus</li>
        <li>Testmonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon'/>
    </nav>
  )
}

export default Navbar
