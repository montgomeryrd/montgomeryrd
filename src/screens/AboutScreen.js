import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Jumbotron, Nav } from 'react-bootstrap';

const AboutScreen = () => {
    return (
        <Jumbotron className="about-container page">
            <h1 className="display-3 about-title pb-2">At a glimpse</h1>
            <span className="pr-3 play-video"> play video</span>
            <i className="fas fa-play play-video-btn"></i>
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