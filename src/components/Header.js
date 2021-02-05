import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <header>
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
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
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                                <LinkContainer to="/about">
                                    <Nav.Link>
                                        <span className="nav-item">About</span>
                                    </Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/works">
                                    <Nav.Link className="nav-item">
                                    <span className="nav-item">Works</span>
                                    </Nav.Link>
                                </LinkContainer>

                                <LinkContainer to="/contact">
                                    <Nav.Link className="nav-item">
                                    <span className="nav-item">Contact</span>
                                    </Nav.Link>
                                </LinkContainer>
                            <div className={isActive ? "is-active hamburger" : "hamburger"} onClick={() => setIsActive(!isActive)}>
                                <div className="bar"></div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;