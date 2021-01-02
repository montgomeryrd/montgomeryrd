import { useState } from 'react';
import MainFrontPage from '../FrontPage/MainFrontPage/MainFrontPage';
import MainAboutPage from '../About/MainAboutPage/MainAboutPage';
import MainPortfolioPage from '../Portfolio/MainPortfolioPage/MainPortfolioPage';
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
			case 'portfolio':
				return <MainPortfolioPage page={page} setPage={setPage} />
			case 'contact':
				return <MainContactPage page={page} setPage={setPage} />
			default:
				break;
		}
	}
    return (
        <div id={`${page}-menu-container`}>
            <div id={`${page}-menu-burger`}>
                <div id={toggle ? `${page}-close` : `${page}-burger`} onClick={() => setToggle(!toggle)}>
                    <div className={`${page}-brgr-line`} id={`${page}-bg-line-1`}></div>
                    <div className={`${page}-brgr-line`} id={`${page}-bg-line-2`}></div>
                    <div className={`${page}-brgr-line`} id={`${page}-bg-line-3`}></div>
                </div>
    
                <div className={`${page}-line-shadow`} id={toggle ? `${page}-sh-line-close-1` : `${page}-sh-line-1`}></div>
                <div className={`${page}-line-shadow`} id={toggle ? `${page}-sh-line-close-2` : `${page}-sh-line-2`}></div>
                <div className={`${page}-line-shadow`} id={toggle ? `${page}-sh-line-close-3` : `${page}-sh-line-3`}></div>
            </div>

            {location(page)}
        </div>

    )
}

export default MenuBurger;