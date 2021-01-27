import gitHub from '../../assets/banner/github-logo.png';
import linkedIn from '../../assets/banner/linkedin-logo.png';
import twitter from '../../assets/banner/twitter-logo.png';
import codewars from '../../assets/banner/codewars-logo.png';

import './styles.css';

const ContactLinks = () => {

    return (
        <header className="contact-links-container">
            <a className="github-banner" href="https://github.com/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="github montgomeryrd">
                <img src={gitHub} alt="GitHub"></img>
                <div className="banner" id="github"></div>
                <div className="banner-tip" id="github-color"></div> 
            </a>
        
            <a className="linkedin-banner" href="https://linkedin.com/in/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="linkedin montgomeryrd">
                <img src={linkedIn} alt="LinkedIn"></img>
                <div className="banner" id="linkedin"></div>
                <div className="banner-tip" id="linkedin-color"></div>
            </a>

            <a className="twitter-banner" href="https://twitter.com/richard04755318" target="_blank" rel="noopener noreferrer" alt="twitter richard.montgomery.dev">
                <img src={twitter} alt="Twitter"></img>                
                <div className="banner" id="twitter"></div>
                <div className="banner-tip" id="twitter-color"></div>
            </a>
            <a className="codewars-banner" href="https://www.codewars.com/users/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="codewars montgomeryrd">
                <img src={codewars} alt="Codewars"></img>                
                <div className="banner" id="codewars"></div>
                <div id="hide-name"></div>
                <div className="banner-tip" id="codewars-color"></div>
            </a>
        </header>
    )
}

export default ContactLinks;