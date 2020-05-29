import React from 'react';

class Projects extends React.Component {
    render() {
        return (
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="projects-content-view">
                    <h2>Music Search App with React</h2>
                    <h2>To-Do App with Svelte</h2>
                    <h2>Weather App with Angular</h2>
                    <h2>Chat App with Vue</h2>
                    <h2>Note Taking App with React</h2>
                    <h2>Be On-Time App</h2>
                    <h2>TweetDeck</h2>
                    <h2>E-Commerce Store</h2>
                </div>
            </div>
        );
    }
}

export default Projects;