import React from 'react';
import { Jumbotron, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
    return (
        <Jumbotron id="home-container">
            <div className="overlay"></div>
            <p className="lead home-title">Hi, my name is</p>          
            <h1 className="display-3 home-subtitle">Richard Montgomery</h1>
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
            <div className="mobile mobile-footer">
                <i class="fas fa-caret-down"></i>
            </div>
        </Jumbotron>
    )
}

export default HomeScreen;