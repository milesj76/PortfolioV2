import React from 'react'

const Hero = () => {
    return (
        <section className="hero-container" id="hero">
            <div className="hero-text">
                <h1>My name is Miles.</h1>
                <h1>I build responsive websites.</h1>
            </div>
            <div className="hero-btns-row">
                <a href="#projects" className="hero-btn">View Portfolio</a>
                <a href="#contact" className="hero-btn">Hire Me</a>
            </div>
            <div className="hero-carousel">
                <svg id="carousel1" width="8" height="8">
                    <rect width="8" height="8" />
                </svg>
                <svg id="carousel2" width="8" height="8">
                    <rect width="8" height="8" />
                </svg>
                <svg id="carousel3" width="8" height="8">
                    <rect width="8" height="8" />
                </svg>
            </div>
        </section>
    )
}

export default Hero
