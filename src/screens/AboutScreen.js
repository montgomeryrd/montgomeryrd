import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Jumbotron, Nav } from 'react-bootstrap';

const AboutScreen = () => {
    return (
        <Jumbotron id="about-container">
            <div className="overlay"></div>            
            <main className="about-body">
                <h1 className="lead about-title">Break The Ice</h1>
                
                <span className="summary-btn">
                    <i className="fas fa-caret-down"></i>
                    <span className="ml-4">summary</span>
                </span>
                <span className="ml-3 mr-3">||</span>
                <span className="play-video-btn">
                    <i className="ml-1 fas fa-play play-video-btn"></i>
                    <span className="ml-3">watch video</span>
                </span>
                
                <Nav>
                    <LinkContainer to="/works">
                        <Nav.Link>
                            <button type="button" className="btn btn-outline-primary about-button">continue</button>
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </main>
        </Jumbotron>
    )
}

export default AboutScreen;