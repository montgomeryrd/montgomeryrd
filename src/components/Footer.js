import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    const copyEmailAddress = () => {
        const emailAddress = document.getElementById("text");
        const textArea = document.createElement("textarea");
        textArea.value = emailAddress.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
    }

    return (
        <footer>
            <Container>
                <Row className="footer-items">
                    <section>
                        <div id="email" className="ml-3">
                            <div id="copied-box">
                                <div id="copied-speech-bubble">
                                    <div id="copied-speech-bubble-triangle"></div>
                                    <span id="copied">copied</span>
                                </div>
                            </div>
                            <span id="text" onClick={() => copyEmailAddress()}>montgomery_rd@yahoo.com</span>
                        </div>
                    </section>
                    <section>
                        <a className="ml-3 p-3" href="https://github.com/montgomeryrd" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-alt"></i>
                        </a>
                    
                        <a className="p-3" href="https://www.linkedin.com/in/montgomeryrd/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                
                        <a className="p-3" href="https://twitter.com/richard04755318" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </section>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;