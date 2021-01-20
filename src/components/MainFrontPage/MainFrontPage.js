import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ContactLinks from '../ContactLinks/ContactLinks';
import MainAboutPage from '../MainAboutPage/MainAboutPage';
import './styles.css';

function MainFrontPage({ setPage }) {

    return (
        <div className="front-page-container">
            <ContactLinks />
            <main className="front-page">
                <h1 className="front-page-title">Hi, my name is</h1>
                <h1 className="front-page-name">
                    <span id="l-1" className="front-page-letters">R</span>
                    <span id="l-2" className="front-page-letters">i</span>
                    <span id="l-3" className="front-page-letters">c</span>
                    <span id="l-4" className="front-page-letters">h</span>
                    <span id="l-5" className="front-page-letters">a</span>
                    <span id="l-6" className="front-page-letters">r</span>
                    <span id="l-7" className="front-page-letters">d</span>
                    <span id="l-8"> </span>
                    <span id="l-9" className="front-page-letters">M</span>
                    <span id="l-10" className="front-page-letters">o</span>
                    <span id="l-11" className="front-page-letters">n</span>
                    <span id="l-12" className="front-page-letters">t</span>
                    <span id="l-13" className="front-page-letters">g</span>
                    <span id="l-14" className="front-page-letters">o</span>
                    <span id="l-15" className="front-page-letters">m</span>
                    <span id="l-16" className="front-page-letters">e</span>
                    <span id="l-17" className="front-page-letters">r</span>
                    <span id="l-18" className="front-page-letters">y</span>
                </h1>
                <section className="front-page-main">
                    <span>
                        <span id="w-1">I am a web developer</span>
                        <span id="w-2"> living on the Kitsap Penninsula</span>
                        <span id="w-3"> in Washington State.</span>
                        <span id="w-1"> I enjoy building functional</span>
                        <span id="w-2"> web applications using</span>
                        <span id="w-2"> interactive, adaptive</span>
                        <span id="w-3"> and responsive design.</span>
                    </span>
                </section>
                <Router>
                    <NavLink to="/about" style={{ textDecoration: 'none' }}>
                        <button id="front-page-button" onClick={() => setPage('about')}>
                            <span id="b-1">L</span>
                            <span id="b-2">e</span>
                            <span id="b-3">t</span>
                            <span id="b-4">'</span>
                            <span id="b-5">s</span>
                            <span id="b-6"> </span>
                            <span id="b-7">G</span>
                            <span id="b-8">o</span>
                            <span id="b-9">!</span>
                        </button>
                    </NavLink>
                    <Route path='/about' render={props => (
                        <MainAboutPage props={props} />
                    )} />
                </Router>
            </main>
        </div>
    );
}

export default MainFrontPage;