import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Jumbotron, Nav } from 'react-bootstrap';

const AboutScreen = () => {
    return (
        <Jumbotron className="about-container">
            <h1 className="display-3 about-title">At a glimpse</h1>
            <hr className="my-4"></hr>
            <p className="about-body">
                a short video
            </p>
            <Nav>
                <LinkContainer to="/works">
                    <Nav.Link>
                        <button type="button" className="btn btn-outline-primary about-button">continue</button>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </Jumbotron>
    )
}

export default AboutScreen;