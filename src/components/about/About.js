import React from 'react'
import me from '../../img/me.jpg'

const About = () => {
    return (
        <section className="about-container" id="about">
            <div className="about-div about-center">
                <h1>I'm ready to work.</h1>
                {/* <img src="https://via.placeholder.com/200?text=Picture+Of+Ya+Boy" alt='' /> */}
                <img src={me} alt="Picture of Miles, the developer"/>
            </div>
            <div className="about-div">
                <div className="about-text">
                    <p>I'm a self-taught developer who's committed to working in the tech industry. I first toyed with HTML back in high school but really started to dig in around 2017 after finding several free resources to learn code. In 2020, after having worked service, manufacturing and musician roles, I made the decision to seriously dig into the programming world and start a career.</p>
                    <hr />
                    <p>Since then, I've spent almost all of my time dedicated to learning web technologies like React and Angular. I'm very interested in all things tech and love that I'm able to create tools using code. I intend to learn more about software, mobile, web assembly, and really the breadth of IT as I'd like to find my place to properly specialize my skills. I believe web development is the way to start that process.</p>

                </div>
                <ul className="about-list">
                    <li>WEB DESIGN</li>
                    <li>RESPONSIVE DESIGN</li>
                    <li>REACT</li>
                    <li>ANGULAR</li>
                </ul>
            </div>
        </section>
    )
}

export default About
