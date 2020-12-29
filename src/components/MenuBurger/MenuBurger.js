import { useState } from 'react';
import './styles.css';

const MenuBurger = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div id="menu-container">
            { toggle ? (
                <div id="menu-burger" onClick={() => setToggle(!toggle)}>
                    <div id="burger">
                        <div className="brgr-line"></div>
                        <div className="brgr-line"></div>
                        <div className="brgr-line"></div>
                    </div>
        
                    <div className="line-shadow" id="sh-line-1"></div>
                    <div className="line-shadow" id="sh-line-2"></div>
                    <div className="line-shadow" id="sh-line-3"></div>
                </div>
            ) : (
                <div id="menu-close" onClick={() => setToggle(!toggle)}>
                    <div id="x-back"></div>
                    <div id="x-forward"></div>
                </div>
            )}
        </div>
    )
}

export default MenuBurger;