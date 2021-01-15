import Logo from '../Logo/Logo';

import me from '../../assets/me/me.png';
import me1 from '../../assets/me/grey1.png';
import me2 from '../../assets/me/grey2.png';
import me3 from '../../assets/me/grey3.png';
import me4 from '../../assets/me/grey4.png';
import me5 from '../../assets/me/grey5.png';
import me6 from '../../assets/me/grey6.png';
import me7 from '../../assets/me/grey7.png';

import './styles.css';

function MainAboutPage({ setPage, setToggle }) {

    return (
        <div className="about-container">
            <Logo setPage={setPage} setToggle={setToggle} />
            <img id="me" src={me} width="700px" alt="Colorized Selfie" />
            <aside id="selfie">
                <img id="me1" className="fractured" src={me1} width="700px" alt="Selfie" />
                <img id="me2" className="fractured" src={me2} width="700px" alt="Selfie" />
                <img id="me3" className="fractured" src={me3} width="700px" alt="Selfie" />
                <img id="me4" className="fractured" src={me4} width="700px" alt="Selfie" />
                <img id="me5" className="fractured" src={me5} width="700px" alt="Selfie" />
                <img id="me6" className="fractured" src={me6} width="700px" alt="Selfie" />
                <img id="me7" className="fractured" src={me7} width="700px" alt="Selfie" />
            </aside>
            <div className="about-main-container">
                <main className="about-main">
                    <h4 id="passion" className="background-name">passions</h4>
                    <section id="passion-section" className="summaries">
                        When asked about my passions, I used to say "art". I like to draw, to paint with acrylics and play guitar, but the answer always felt inadequate. I didn't consider how I could be misunderstanding my passions. I also like to build PCs, play with puzzles, and have an interest in woodworking. When I became a more proficient coder, I realized it wasn't the hobbies I felt passionate about, but the act of them. I felt passion in creating something new, in making something functional. I felt passion in overcoming issues and progressing my skills, in producing something aesthetic, all aspects I've discovered in building websites and web applications.
                    </section>
                    <h4 id="skills" className="background-name">skills</h4>
                    <section id="skills-section" className="summaries">
                        I'm looking to become a junior developer while expanding my skills in full stack javascript. I have a firm knowledge of HTML, CSS, JavaScript, and have experience working with various frameworks and libraries. I feel most proficient with React.
                    </section>
                    <h4 id="growth" className="background-name">growth</h4>
                    <section id="growth-section" className="summaries">
                        I believe your best investment is in yourself. Your second best investment is in the people around you. Your third best is in the environment.
                    </section>
                </main>
                <button id="about-page-button" onClick={() => setPage('portfolio')}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default MainAboutPage;