import React from 'react'
import heroImg1 from '../../img/hero/hero-img1.png'
import heroImg2 from '../../img/hero/hero-img2.jpg'
import heroImg3 from '../../img/hero/hero-img3.jpg'
import Flicking from '@egjs/react-flicking'
import {Fade, AutoPlay, Parallax} from '@egjs/flicking-plugins'

const Hero = () => {

    // Flicking plugins to add fade and autoplay effects
    let plugins = [new Fade("", 0.8), new AutoPlay(3000, "NEXT")];

    // Ease in formula for smoother scrolling of hero images
    function easeInOutQuint(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
        }

    return (

        <section className="flicking-wrapper">
            <Flicking
                duration={3000}
                circular={true}
                gap={0}
                adaptive={true}
                panelEffect={x => easeInOutQuint(x)}
                autoResize={true}
                plugins={plugins}
            >
                <div className="flicking-panel" style={{ backgroundImage: "url("+heroImg1+")"}} />
                <div className="flicking-panel hero-filter" style={{ backgroundImage: "url("+heroImg2+")"}} />
                <div className="flicking-panel hero-filter" style={{ backgroundImage: "url("+heroImg3+")"}} />
            </Flicking>
            <section className="hero-container" id="hero">
                <div className="hero-box">
                    <div className="hero-text">
                        <h1>My name is Miles.</h1>
                        <h2>Front End Developer | Musician</h2>
                    </div>
                    <div className="hero-btns-row">
                        <a href="#projects" className="hero-btn">View Portfolio</a>
                        <a href="#contact" className="hero-btn">Hire Me</a>
                    </div>
                </div>
            </section>
        </section>
        
    );
}

export default Hero
