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
                    <h4 id="passion" className="background-name">passion</h4>
                    <section id="passion-section" className="summaries">
                        It's taken me time to put my thumb on what it is I feel passionate about. In my free time, I've enjoyed drawing, acrylic painting, playing guitar, even building personal computers over the years, but when I started coding, I realized what it is about my hobbies that I feel passion towards. It's creating. It's problem solving. It's design. All aspects I've discovered within building websites and web applications.
                    </section>
                    <h4 id="skills" className="background-name">skills</h4>
                    <section id="skills-section" className="summaries">
                        I'm looking to become a junior developer while expanding my skills in full stack javascript. I have a firm knowledge of HTML, CSS, JavaScript, and have experience working with various frameworks and libraries. I feel most proficient with React.
                    </section>
                    <h4 id="growth" className="background-name">growth</h4>
                    <section id="growth-section" className="summaries">
                        I believe your best investment is in yourself and the second best investment is in the people around you (and your third best is TSLA).
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