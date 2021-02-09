import { LinkContainer } from 'react-router-bootstrap';
import { Col, Nav, Row } from 'react-bootstrap';

import Card from '../components/Card';
import tessio from '../assets/tessio-preview.png';
import kirk from '../assets/kirk-preview.png';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const WorksScreen = () => {

    const items = [
        <Col lg={4}>
            <Card
                image={tessio}
                title="Tessio"
                subtitle="Made with React"
                text="A updated mock website for a local pizza / whiskey / beer restaurant in Silverdale, Washington that uses a parallax effect on desktop, and scroll on mobile."
                link="https://montgomeryrd.github.io/tessio/"
            />
        </Col>, 
        <Col lg={4}>
            <Card
                image={kirk}
                title="Kirk's App"
                subtitle="Made with React"
                text="Basic to-do style app made for a prev employer. A shopping list is copied from a text message and pasted into a textarea to create a modifiable list. Uses localStorage, and designed mobile first."
                link="https://montgomeryrd.github.io/tessio-app/"
            />
        </Col>
    ];

    return (
        <div className="works-container page">
            <p className="lead intro">Sample Works</p>
            <Row>
                <AliceCarousel
                    // disableButtonsControls 
                    disableDotsControls 
                    mouseTracking 
                    items={items} 
                />
            </Row>
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