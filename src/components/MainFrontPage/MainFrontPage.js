import ContactLinks from '../ContactLinks/ContactLinks';
import './styles.css';

const MainFrontPage = ({ page, setPage, toggle, setToggle }) => {

    return (
        <div className="front-page-container">
            <ContactLinks />
            <main className={page}>
                <h1 className="hi">Hi, my name is</h1>
                <h1 className="name">
                    <span id="l-1" className="highlight">R</span>
                    <span id="l-2" className="highlight">i</span>
                    <span id="l-3" className="highlight">c</span>
                    <span id="l-4" className="highlight">h</span>
                    <span id="l-5" className="highlight">a</span>
                    <span id="l-6" className="highlight">r</span>
                    <span id="l-7" className="highlight">d</span>
                    <span id="l-8"> </span>
                    <span id="l-9" className="highlight">M</span>
                    <span id="l-10" className="highlight">o</span>
                    <span id="l-11" className="highlight">n</span>
                    <span id="l-12" className="highlight">t</span>
                    <span id="l-13" className="highlight">g</span>
                    <span id="l-14" className="highlight">o</span>
                    <span id="l-15" className="highlight">m</span>
                    <span id="l-16" className="highlight">e</span>
                    <span id="l-17" className="highlight">r</span>
                    <span id="l-18" className="highlight">y</span>
                </h1>
                <section className="main">
                    <span>
                        <span id="w-1">I am a web developer</span>
                        <span id="w-2"> living on the Kitsap</span>
                        <span id="w-3"> Penninsula in Washington State.</span>
                        <span id="w-1"> I enjoy building</span>
                        <span id="w-2"> functional web</span>
                        <span id="w-2"> applications using interactive,</span>
                        <span id="w-3"> responsive design.</span>
                    </span>
                </section>
                <button id="main-front-page-button" onClick={() => setPage('about')}>
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
            </main>
        </div>
    )
}

export default MainFrontPage;