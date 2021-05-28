import React from 'react'
import { ReactComponent as MenuBtn } from './nav-menu-btn.svg'

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='nav-logo'>
        <a href='#'>Miles Burke</a>
      </div>

      {/* Button is currently hidden in CSS. Will display later once hamburger menu is complete. */}
      <div className='nav-menu'>
        <MenuBtn />
      </div>
    </nav>
  )
}

export default Navbar
