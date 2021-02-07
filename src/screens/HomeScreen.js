import React from 'react';
import { Jumbotron, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
    return (
        <Jumbotron className="home-container">
            <p className="lead home-intro">Hi, my name is</p>          
            <h1 className="display-3 home-name">Richard Montgomery</h1>
            <hr className="my-4"></hr>
            <p className="home-body">
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
        </Jumbotron>
    )
}

export default HomeScreen;