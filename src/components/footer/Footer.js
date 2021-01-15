import React from 'react'
import { ReactComponent as MailIcon } from './mail.svg'
import { ReactComponent as GithubIcon} from './github.svg'

const Footer = () => {
    const emailAddress = "mailto:milesburke.portfolio@gmail.com";
    const githubPage = "https://github.com/milesj76";

    return (
        <footer id="footer">
            <div className="footer-div">
                <p>Created by Miles Burke</p>
            </div>
            <div className="footer-div">
                <a href={emailAddress} rel="noopener noreferrer" target="_blank"><MailIcon className="footer-icon" /></a>
                <a href={githubPage} rel="noopener noreferrer" target="_blank"><GithubIcon className="footer-icon" /></a>
            </div>
        </footer>
    )
}

export default Footer


// Mail icon from https://fontawesome.com/icons/envelope?style=solid
// Github icon from https://fontawesome.com/icons/github?style=brands