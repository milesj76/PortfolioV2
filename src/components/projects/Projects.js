import React from 'react'
import Tile from './Tile'
import surveyThumb from '../../img/survey-thumbnail.PNG'
import counterThumb from '../../img/counter-thumbnail.PNG'
import loginThumb from '../../img/login-thumbnail.PNG'
import tributeThumb from '../../img/tribute-thumbnail.PNG'

const Projects = () => {
    const projects = {
        fccSurvey: {
            name: "Survey Form",
            desc: "Website",
            thumb: surveyThumb,
            site: "https://codepen.io/milesj76/pen/wvGgJmZ"
        },
        reactCounter: {
            name: "Customizable Counter",
            desc: "React Web App",
            thumb: counterThumb,
            site: "https://milesj76.github.io/custom-counter"
        },
        loginPage: {
            name: "Login Page",
            desc: "Responsive Website",
            thumb: loginThumb,
            site: "https://milesj76.github.io/LoginPage"
        },
        tribute: {
            name: "Sowell Tribute",
            desc: "Website",
            thumb: tributeThumb,
            site: "https://codepen.io/milesj76/pen/KKzNxvw"
        },
    }
    
    return (
        <section className="projects-container" id="projects">
            <header><h1>My Projects</h1></header>
            <div className="projects-div">
                <div className="projects-row1">
                    <Tile project={projects.fccSurvey} />
                    <Tile project={projects.reactCounter} />
                    <Tile project={projects.tribute} />
                </div>
                <div className="projects-row2">
                    <Tile project={projects.loginPage} />
                </div>
            </div>
        </section>
    )
}

export default Projects
