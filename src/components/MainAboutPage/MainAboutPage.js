import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MainPortfolioPage from '../MainPortfolioPage/MainPortfolioPage';

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

    return (
        <div className={page !== 'about' ? "hide-div" : "about-page-container"}>
            <Logo setPage={setPage} />
                <img id="selfie-colored" src={me} width="700px" alt="Colorized Selfie" />
                <div id="selfie-black-and-white">
                    <img id="me1" className="selfie-fractured" src={me1} width="700px" alt="Selfie" />
                    <img id="me2" className="selfie-fractured" src={me2} width="700px" alt="Selfie" />
                    <img id="me3" className="selfie-fractured" src={me3} width="700px" alt="Selfie" />
                    <img id="me4" className="selfie-fractured" src={me4} width="700px" alt="Selfie" />
                    <img id="me5" className="selfie-fractured" src={me5} width="700px" alt="Selfie" />
                    <img id="me6" className="selfie-fractured" src={me6} width="700px" alt="Selfie" />
                    <img id="me7" className="selfie-fractured" src={me7} width="700px" alt="Selfie" />
                </div>
            <main className="about-page">
                <div className="about-page-background">
                    <h4 id="passion" className="about-page-background-name">passion</h4>
                    <h4 id="skills" className="about-page-background-name">skills</h4>
                    <h4 id="growth" className="about-page-background-name">growth</h4>
                </div>
                <section id="passion-section" className="summaries">
                    In my free time, I enjoy drawing, painting with acrylics, playing guitar, building PCs, working on puzzles, making pizza. Coding helped me process and better understand my hobbies. As I became a more proficient coder, I realized it wasn't the hobbies that defined my passion, but the act of my hobbies. I have passion in creating, in design, aesthetics, building functionality, and I enjoy learning and progressing my skills, all aspects I've discovered in building websites and web applications. 
                </section>
                <section id="skills-section" className="summaries">
                    I'm looking to become a junior developer while expanding my skills in full stack javascript. I have a firm knowledge of HTML, CSS, JavaScript, and have experience working with various frameworks and libraries. I feel most proficient with React.
                </section>
                <section id="growth-section" className="summaries">
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
    );
}

export default MainAboutPage;