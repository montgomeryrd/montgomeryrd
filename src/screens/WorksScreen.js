import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Col, Nav, Row } from 'react-bootstrap';
import Card from '../components/Card';
import tessio from '../assets/tessio-preview.png';
import kirk from '../assets/kirk-preview.png';

const WorksScreen = () => {
    return (
        <div className="works-container">
            <p className="lead intro">Sample Works</p>
            <Row>
                <Col lg={4}>
                    <Card
                        image={tessio}
                        title="Tessio"
                        subtitle="Made with React"
                        text="Mock website for a local pizza / whiskey / beer restaurant in Silverdale, WA with a parallax effect on desktop, scroll on mobile."
                        link="https://montgomeryrd.github.io/tessio/"
                    />
                </Col>
                <div className="card-spacer"></div>
                <Col lg={4}>
                    <Card
                        image={kirk}
                        title="Kirk's App"
                        subtitle="Made with React"
                        text="Basic to-do style app made for a previous employer. A shopping list is copied from a text message and pasted into a textarea field to create a list of removable items that can be updated. Kirk's App uses localStorage and is designed mobile first."
                        link="https://montgomeryrd.github.io/tessio-app/"
                    />
                </Col>
            </Row>
            <div className="card-spacer"></div>
            <Nav>
                <LinkContainer to="/skills">
                    <Nav.Link>
                        <button type="button" className="btn btn-outline-primary work-button">continue</button>
                    </Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default WorksScreen;