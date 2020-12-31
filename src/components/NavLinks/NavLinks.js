import './styles.css';

const NavLinks = ({ toggle, name, text, subtext }) => {
    return (
        <div className="navlink-container">
            <h1 className={toggle ? "name open-name" : "name"}>{name}</h1>
            <div className={toggle ? "main open-main" : "main"}>
                <p>{text}</p>
                <p>{subtext}</p>
            </div>

            <div className="links">
                <div className={toggle ? "links open-link-1" : "links link-1"}>
                    <h2 className={toggle ? "show" : "hide"}>CONTACT</h2>
                </div>
                <div className={toggle ? "links open-link-2" : "links link-2"}>
                    <h2 className={toggle ? "show" : "hide"}>ABOUT</h2>
                </div>
                <div className={toggle ? "links open-link-3" : "links link-3"}>
                    <h2 className={toggle ? "show" : "hide"}>WORKS</h2>
                </div>
            </div>
        </div>
    )
}

export default NavLinks;