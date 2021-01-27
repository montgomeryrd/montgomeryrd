import { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MainPortfolioPage from '../MainPortfolioPage/MainPortfolioPage';

import { libraries } from '../Libraries/Libraries';
import me from '../../assets/me/me.png';
import me1 from '../../assets/me/grey1.png';
import me2 from '../../assets/me/grey2.png';
import me3 from '../../assets/me/grey3.png';
import me4 from '../../assets/me/grey4.png';
import me5 from '../../assets/me/grey5.png';
import me6 from '../../assets/me/grey6.png';
import me7 from '../../assets/me/grey7.png';

import './styles.css';

function MainAboutPage({ page, setPage }) {
    const [about, setAbout] = useState("");

    const shelf = libraries.map((item, index) => {
        return <img key={index} src={item} alt={item}></img>;
    });

    return (
        <div className={page !== 'about' ? "hide-div" : "about-page-container"}>
            <Logo setPage={setPage} />
            <div className="about-mobile-container">
                <section id="section-1">
                    I want to build applications that make a difference.
                </section>
                <div className="about-page-mobile-view">
                    <ul className="hide-div about-page-menu">
                        <li id="about-page-menu-name" onClick={() => setAbout("")}>Richard Montgomery</li>
                        <li onClick={() => setAbout('passion')} style={{background: about === 'passion' ? "#f3f3f3" : "#fff"}}>
                            <div className="about-page-selected" style={{background: about === 'passion' ? "rgb(255, 94, 0)" : "#fff"}}></div>
                            <span id="fire">🔥</span>
                            passion
                        </li>
                        <li onClick={() => setAbout('skills')} style={{background: about === 'skills' ? "#f3f3f3" : "#fff"}}>
                            <div className="about-page-selected" style={{background: about === 'skills' ? "black" : "#fff"}}></div>
                            <span id="archery">🎯</span>
                            skills
                        </li>
                        <li onClick={() => setAbout('growth')} style={{background: about === 'growth' ? "#f3f3f3" : "#fff"}}>
                            <div className="about-page-selected" style={{background: about === 'growth' ? "teal" : "#fff"}}></div>
                            <span id="octopus">🐙</span>
                            growth
                        </li>
                        <li onClick={() => setAbout('education')} style={{background: about === 'education' ? "#f3f3f3" : "#fff"}}>
                            <div className="about-page-selected" style={{background: about === 'education' ? "#4900FF" : "#fff"}}></div>
                            <span id="education">🏫</span>
                            education
                        </li>
                        <li onClick={() => setAbout('resume')} style={{background: about === 'resume' ? "#f3f3f3" : "#fff"}}>
                            <div className="about-page-selected" style={{background: about === 'resume' ? "gray" : "#fff"}}></div>
                            <a href="https://docs.google.com/document/d/14xeZcrS5G_fks0mnwhQnKD8FiJymT83mCovkMyAKpTY/edit?usp=sharing" target="_blank" rel="noreferrer" style={{textDecoration: "none", color:"#838383"}}>
                                <span id="resume">📄</span>
                                resume
                            </a>
                        </li>
                    </ul>
                    <img id="selfie-colored" src={me} width="700px" alt="Colorized Selfie" />
                    <figure id="selfie-black-and-white" style={{opacity: about !== "" ? .4 : 1}}>
                        <img id="me1" className="selfie-fractured" src={me1} width="700px" alt="Selfie" />
                        <img id="me2" className="selfie-fractured" src={me2} width="700px" alt="Selfie" />
                        <img id="me3" className="selfie-fractured" src={me3} width="700px" alt="Selfie" />
                        <img id="me4" className="selfie-fractured" src={me4} width="700px" alt="Selfie" />
                        <img id="me5" className="selfie-fractured" src={me5} width="700px" alt="Selfie" />
                        <img id="me6" className="selfie-fractured" src={me6} width="700px" alt="Selfie" />
                        <img id="me7" className="selfie-fractured" src={me7} width="700px" alt="Selfie" />
                    </figure>
                </div>
                <section className="hide-div icons">
                    {shelf}
                </section>
                <main className="about-page">
                    <div className="about-page-background">
                        <h4 id="passion" className="about-page-background-name">passion</h4>
                        <h4 id="skills" className="about-page-background-name">skills</h4>
                        <h4 id="growth" className="about-page-background-name">growth</h4>
                    </div>
                    <section id="passion-section" className={about === 'passion' ? "passion-show summaries" : "summaries"}>
                        In my free time, I enjoy drawing, painting with acrylics, playing guitar, building PCs, working on puzzles, making pizza. Coding helped me process and better understand my hobbies. As I became a more proficient coder, I realized it wasn't the hobbies that defined my passion, but the act of my hobbies. I have passion in creating, in design, aesthetics, building functionality, and I enjoy learning and progressing my skills, all aspects I've discovered in building websites and web applications. 
                    </section>
                    <section id="skills-section" className={about === 'skills' ? "skills-show summaries" : "summaries"}>
                        I have a firm knowledge of HTML, CSS, JavaScript, and have experience working with various frameworks and libraries. I feel most proficient with React (MERN). I'm looking to become a junior developer while expanding my skills in full stack javascript.
                    </section>
                    <section id="growth-section" className={about === 'growth' ? "growth-show summaries" : "summaries"}>
                        I believe your best investment is in yourself. Your second best investment is in the people around you.
                    </section>
                    <Router>
                        <NavLink to="/work" style={{textDecoration: 'none'}}>
                            <button id="about-page-button" onClick={() => setPage('portfolio')}>
                                Next
                            </button>
                        </NavLink>
                        <Route path='/work' render={props => (
                            <MainPortfolioPage props={props}/>
                            )} />
                    </Router>
                </main>
            </div>
        </div>
    );
}

export default MainAboutPage;