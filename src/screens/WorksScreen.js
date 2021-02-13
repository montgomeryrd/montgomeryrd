import { LinkContainer } from 'react-router-bootstrap';
import { Col, Nav, Row } from 'react-bootstrap';

import PreviewCard from '../components/PreviewCard';
import tessio from '../assets/tessio-preview.png';
import kirk from '../assets/kirk-preview.png';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const WorksScreen = () => {

    const items = [
        <Col lg={4}>
            <PreviewCard
                image={tessio}
                title="Tessio"
                subtitle="Made with React"
                text="A mock website for a local pizza / whiskey / beer restaurant in Silverdale, Washington. Designed with a parallax effect on desktop and scroll on mobile."
                link="https://montgomeryrd.github.io/tessio/"
            />
        </Col>, 
        <Col lg={4}>
            <PreviewCard
                image={kirk}
                title="Kirk's App"
                subtitle="Made with React"
                text="Basic to-do style app made for a prev employer. A shopping list is copied from a text message and pasted into a textarea to create a modifiable list. Uses localStorage and designed mobile first."
                link="https://montgomeryrd.github.io/tessio-app/"
            />
        </Col>
    ];

    return (
        <div id="works-container">
            <main>
                <p className="pt-4 lead works-title">Sample Works</p>
                <Row>
                    <AliceCarousel
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
            </main>
        </div>
    )
}

export default WorksScreen;