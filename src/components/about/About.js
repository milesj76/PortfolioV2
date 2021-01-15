import React from 'react'

const About = () => {
    return (
        <section className="about-container" id="about">
            <div className="about-div">
                <h1>I'm ready to work.</h1>
                <img src="https://via.placeholder.com/200?text=Picture+Of+Ya+Boy" alt='' />
            </div>
            <div className="about-div">
                <div>
                    <p>This is a little information about me and how I'm a working guy and that I want to get my coding career started.</p>
                </div>
                <div>
                    <ul className="about-list">
                        <li>WEB DESIGN</li>
                        <li>RESPONSIVE DESIGN</li>
                        <li>REACT</li>
                        <li>ANGULAR</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
