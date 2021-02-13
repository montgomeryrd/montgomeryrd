import React from 'react';
import { Jumbotron, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
    return (
        <Jumbotron id="home-container">
            <main>
                <h1 className="lead home-title">Hi, my name is</h1>          
                <h2 className="mt-3 display-3 home-subtitle">Richard Montgomery</h2>
                <p className="mt-4 home-body">
                    I am a web developer living on the Kitsap Peninsula in Washington State.
                    I enjoy building functional web applications using interactive, adaptive
                    and responsive design.
                </p>
                <Nav>
                    <LinkContainer to="/about">
                        <Nav.Link>
                            <button type="button" className="btn btn-primary home-button">explore</button>
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </main>
            <section className="mobile-footer">
                <i className="fas fa-caret-down"></i>
            </section>
        </Jumbotron>
    )
}

export default HomeScreen;