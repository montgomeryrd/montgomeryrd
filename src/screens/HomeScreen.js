import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <Jumbotron className="home-container" style={{background: "transparent"}}>
            <h2 style={{color: "#32adff"}}>Hi, my name is</h2>
            <h1 className="py-3" style={{fontSize: "4rem"}}>Richard Montgomery</h1>
            <p className="py-3" style={{fontSize: "1.2rem"}}>
                I am a web developer living on the Kitsap Peninsula in Washington State.
                I enjoy building functional web applications using interactive, adaptive
                and responsive design.
            </p>
            <p>
                <Button className="home-btn mt-5 px-4" style={{fontSize: "2rem"}} variant="secondary">Let's Go</Button>
            </p>
        </Jumbotron>
    )
}

export default HomeScreen;