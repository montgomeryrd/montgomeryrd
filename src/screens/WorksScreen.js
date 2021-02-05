import React from 'react';
import Card from '../components/Card';
import tessio from '../assets/tessio-preview.png';
import kirk from '../assets/kirk-preview.png';

const WorksScreen = () => {
    return (
        <div className="works-container">
            <p className="lead intro">Recent Apps</p>
            <Card
                image={tessio}
                title="Tessio"
                subtitle="Made with React"
                text="Mock website for local pizza / whiskey / beer restaurant in Silverdale, WA"
                link="https://montgomeryrd.github.io/tessio/"
            />
            <hr></hr>
            <Card
                image={kirk}
                title="Kirk's App"
                subtitle="Made with React"
                text="Made a simple shopping app for a previous employer that utilizes localStorage made with mobile first design."
                link="https://montgomeryrd.github.io/tessio-app/"
            />
        </div>
    )
}

export default WorksScreen;