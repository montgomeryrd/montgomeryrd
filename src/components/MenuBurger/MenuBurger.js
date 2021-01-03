import { useState } from 'react';
import MainFrontPage from '../MainFrontPage/MainFrontPage';
import MainAboutPage from '../MainAboutPage/MainAboutPage';
import MainPortfolioPage from '../MainPortfolioPage/MainPortfolioPage';
import MainContactPage from '../MainContactPage/MainContactPage';

import './styles.css';

function MenuBurger({ page, setPage }) {
    const [toggle, setToggle] = useState(false);

    function location(page) {
        switch (page) {
            case 'front':
                return <MainFrontPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            case 'about':
                return <MainAboutPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            case 'portfolio':
                return <MainPortfolioPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            case 'contact':
                return <MainContactPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            default:
                break;
        }
    }
    return (
        <div className="menu-container">
            <div className="menu-burger">
                <div id={toggle ? "menu-close" : "menu-open"} onClick={() => setToggle(!toggle)}>
                    <div className="brgr-line" id="brgr-line-1"></div>
                    <div className="brgr-filling"></div>
                    <div className="brgr-line" id="brgr-line-2"></div>
                    <div className="brgr-filling"></div>
                    <div className="brgr-line" id="brgr-line-3"></div>
                </div>
            </div>
            {location(page)}
        </div>

    );
}

export default MenuBurger;