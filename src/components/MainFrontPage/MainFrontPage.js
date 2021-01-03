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
            <div className={page}>
                <h1 className={toggle ? "name open-name" : "name"}>RICHARD MONTGOMERY</h1>
                <div className={toggle ? "main open-main" : "main"}>
                    <p>WEB DEVELOPER</p>
                    <p>bio</p>
                </div>

                <div className="links">
                    <div className={toggle ? "links open-link-1" : "links link-1"}>
                        <h2 className={toggle ? "show" : "hide"} onClick={() => reset('contact')}>CONTACT</h2>
                    </div>
                    <div className={toggle ? "links open-link-2" : "links link-2"}>
                        <h2 className={toggle ? "show" : "hide"} onClick={() => reset('about')}>ABOUT</h2>
                    </div>
                    <div className={toggle ? "links open-link-3" : "links link-3"}>
                        <h2 className={toggle ? "show" : "hide"} onClick={() => reset('portfolio')}>WORKS</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFrontPage;