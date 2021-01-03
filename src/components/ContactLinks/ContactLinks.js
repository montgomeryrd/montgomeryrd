import gitHub from '../../assets/github-logo.png';
import linkedIn from '../../assets/linkedin-logo.png';
import twitter from '../../assets/twitter-logo.png';
import codewars from '../../assets/codewars-logo.png';

import './styles.css';

const ContactLinks = () => {
    return (
        <div className="contact-links-container">
            <a id="github-banner" href="https://github.com/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="github montgomeryrd">
                <img src={gitHub} width="100px" alt="GitHub"></img>
                <div className="banner" id="github"></div>
                <div className="banner-tip" id="github-color"></div> 
            </a>
        
            <a id="linkedin-banner" href="https://linkedin.com/in/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="linkedin montgomeryrd">
                <img src={linkedIn} width="100px" alt="LinkedIn"></img>
                <div className="banner" id="linkedin"></div>
                <div className="banner-tip" id="linkedin-color"></div>
            </a>

            <a id="twitter-banner" href="https://twitter.com/richard04755318" target="_blank" rel="noopener noreferrer" alt="twitter richard.montgomery.dev">
                <img src={twitter} width="100px" alt="Twitter"></img>                
                <div className="banner" id="twitter"></div>
                <div className="banner-tip" id="twitter-color"></div>
            </a>
            <a id="codewars-banner" href="https://www.codewars.com/users/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="codewars montgomeryrd">
                <img src={codewars} width="100px" alt="Codewars"></img>                
                <div className="banner" id="codewars"></div>
                <div id="hide-name"></div>
                <div className="banner-tip" id="codewars-color"></div>
            </a>
        </div>
    )
}

export default ContactLinks;