import React from 'react'
import { ReactComponent as MenuBtn } from './nav-menu-btn.svg'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="nav-logo"><a href="#">Miles Burke</a></div>
            <div className="nav-item"><MenuBtn /></div>
        </nav>
    )
}

export default Navbar
