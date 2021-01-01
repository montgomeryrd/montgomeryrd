import { useState } from 'react';
import MainFrontPage from '../FrontPage/MainFrontPage/MainFrontPage';
import MainAboutPage from '../About/MainAboutPage/MainAboutPage';
import MainWorksPage from '../Works/MainWorksPage/MainWorksPage';
import MainContactPage from '../Contact/MainContactPage/MainContactPage';

import './styles.css';

const MenuBurger = ({ page, setPage }) => {
    const [toggle, setToggle] = useState(false);
	
	function location(page) {
		switch(page) {
			case 'front':
				return <MainFrontPage page={page} setPage={setPage} toggle={toggle} />
			case 'about':
				return <MainAboutPage page={page} setPage={setPage} />
			case 'works':
				return <MainWorksPage page={page} setPage={setPage} />
			case 'contact':
				return <MainContactPage page={page} setPage={setPage} />
			default:
				break;
		}
	}
    return (
        <div id="menu-container">
            <div id="menu-burger">
                <div id={toggle ? "close" : "burger"} onClick={() => setToggle(!toggle)}>
                    <div className="brgr-line" id="bg-line-1"></div>
                    <div className="brgr-line" id="bg-line-2"></div>
                    <div className="brgr-line" id="bg-line-3"></div>
                </div>
    
                <div className="line-shadow" id={toggle ? "sh-line-close-1" : "sh-line-1"}></div>
                <div className="line-shadow" id={toggle ? "sh-line-close-2" : "sh-line-2"}></div>
                <div className="line-shadow" id={toggle ? "sh-line-close-3" : "sh-line-3"}></div>
            </div>

            {location(page)}
        </div>

    )
}

export default MenuBurger;