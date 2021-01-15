import React, { useState } from 'react'
import heroImg1 from '../../img/hero/hero-img1.png'
import heroImg2 from '../../img/hero/hero-img2.jpg'
import heroImg3 from '../../img/hero/hero-img3.jpg'
import testImg from '../../img/counter-thumbnail.PNG'

const Hero = () => {
    const backgrounds = {
        basic: "hero-container",
        view1: {
            classes: "hero-bg1",
            url: heroImg1,
        },
        view2: {
            classes: "hero-bg2",
            url: heroImg2,
        },
        view3: {
            classes: "hero-bg3",
            url: heroImg3,
        }
    }

    const [heroBackground, setHeroBackground] = useState(heroImg2)

    console.log(heroImg2)

    return (
        <section className="hero-container" id="hero"
        style={{
            background: `url(${heroBackground})`, backgroundSize: 'cover'
        }}>
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
