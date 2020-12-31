import { useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import './styles.css';

const MenuBurger = () => {
    const [toggle, setToggle] = useState(false);

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

            <NavLinks 
                toggle={toggle}
                name={'RICHARD MONTGOMERY'} 
                text={'Web Developer/React UI/UX'} 
                subtext={''}    
            />
        </div>
    )
}

export default MenuBurger;