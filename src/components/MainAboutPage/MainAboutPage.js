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
        <div>
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
            <main id="about-main">
                <section>
                    <h4 id="passion" className="background-name">passion</h4>
                </section>
                <section>
                    <h4 id="skills" className="background-name">skills</h4>
                </section>
                <section>
                    <h4 id="growth" className="background-name">growth</h4>
                </section>
            </main>
        </div>
    );
}

export default MainAboutPage;