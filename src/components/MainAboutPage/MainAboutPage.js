import Logo from '../Logo/Logo';
import me from '../../assets/greytone.jpg';

import './styles.css';

function MainAboutPage({ setPage, setToggle }) {
    return (
        <div>
            <Logo setPage={setPage} setToggle={setToggle} />
            <img id="me" src={me} alt="Selfie" />
            <aside id="img-revealer">
                <div id="section-1"></div>
                <div id="section-2"></div>
                <div id="section-3"></div>
                <div id="section-4"></div>
                <div id="section-5"></div>
                <div id="section-6"></div>
                <div id="section-7"></div>
                <div id="section-8"></div>
                <div id="section-9"></div>
                <div id="section-10"></div>
                <div id="section-11"></div>
                <div id="section-12"></div>
                <div id="section-13"></div>
                <div id="section-14"></div>
                <div id="section-15"></div>
                <div id="section-16"></div>
            </aside>
        </div>
    );
}

export default MainAboutPage;