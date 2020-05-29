import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="profile-container">
                <img src="" alt=""></img>
                <h1>Richard Montgomery</h1>
                <p>Frontend Developer</p>
                <a href="https://goo.gl/maps/C6cAtb18dwE3uimZ8" rel="noopener noreferrer" target="_blank">East Bremerton, WA</a>
                <div className="social-links-container">
                    <ul>
                        <li>Github</li>
                        <li>Codewars</li>
                        <li>LinkedIn</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="tech-stack-container">
                    <h2>Tech Stack</h2>
                    <div className="tech-stack-content">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>TYPESCRIPT</li>
                            <li>REACT</li>
                            <li>VUE</li>
                        </ul>
                    </div>
                </div>
                <div className="work-experience-container">

                </div>
            </div>
        );
    }
}

export default Profile;