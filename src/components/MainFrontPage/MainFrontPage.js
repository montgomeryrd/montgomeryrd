import ContactLinks from '../ContactLinks/ContactLinks';
import './styles.css';

const MainFrontPage = ({ toggle, setToggle, page, setPage }) => {

    function reset(name) {
        setToggle(false);
        setPage(name);
    }

    return (
        <div className="front-page-container">
            <ContactLinks />
            <main className={page}>
                <h1 className={toggle ? "name open-name" : "name"}>RICHARD MONTGOMERY</h1>
                <section className={toggle ? "main open-main" : "main"}>
                    <h3>WEB DEVELOPER</h3>
                    <p>bio</p>
                </section>

                <div className="links">
                    <nav className={toggle ? "links open-link-1" : "links link-1"} onClick={() => reset('contact')}>
                        <h2 className={toggle ? "show" : "hide"} onClick={() => reset('contact')}>CONTACT</h2>
                    </nav>
                    <nav className={toggle ? "links open-link-2" : "links link-2"} onClick={() => reset('about')}>
                        <h2 className={toggle ? "show" : "hide"} onClick={() => reset('about')}>ABOUT</h2>
                    </nav>
                    <nav className={toggle ? "links open-link-3" : "links link-3"} onClick={() => reset('portfolio')}>
                        <h2 className={toggle ? "show" : "hide"} onClick={() => reset('portfolio')}>WORKS</h2>
                    </nav>
                </div>
            </main>
        </div>
    )
}

export default MainFrontPage;