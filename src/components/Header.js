import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/montgomeryrd">
                        <Navbar.Brand>
                            <span className="monty">
                                <span className="r">r</span>
                                <span className="dot">.</span>
                                <span className="m">m</span>
                                <span className="o">o</span>
                                <span className="n">n</span>
                                <span className="t">t</span>
                                <span className="y">y</span>
                            </span>
                        </Navbar.Brand>
                    </LinkContainer>
                    <div className="menu-wrap">
                        <input type="checkbox" className="toggler"/>
                        <div className="hamburger">
                            <div></div>
                        </div>
                        <div className="menu">
                            <div>
                                <div>
                                    <Nav className="ml-auto">
                                        <LinkContainer to="/montgomeryrd">
                                            <Nav.Link className="nav-hamburger-link-spaces">
                                                <span className="nav-hamburger-link">Home</span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/about">
                                            <Nav.Link className="nav-hamburger-link-spaces">
                                                <span className="nav-hamburger-link">About Me</span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/works">
                                            <Nav.Link className="nav-hamburger-link-spaces">
                                                <span className="nav-hamburger-link">My Apps</span>
                                            </Nav.Link>
                                        </LinkContainer>

                                        <LinkContainer to="/skills">
                                            <Nav.Link className="nav-hamburger-link-spaces">
                                                <span className="nav-hamburger-link">Skills/Education</span>
                                            </Nav.Link>
                                        </LinkContainer>
                                    </Nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/montgomeryrd">
                                <Nav.Link>
                                    <span className="nav-link">Home</span>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/about">
                                <Nav.Link>
                                    <span className="nav-link">About</span>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/works">
                                <Nav.Link>
                                    <span className="nav-link">Works</span>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/skills">
                                <Nav.Link>
                                    <span className="nav-link">Skills/Education</span>
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;