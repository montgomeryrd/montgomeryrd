import Logo from '../Logo/Logo';

function MainContactPage({ page, setPage, toggle, setToggle }) {
    return (
        <div>
            <Logo setPage={setPage} setToggle={setToggle} />
            <h1>Get in touch</h1>
            <a id="linkedin-link" href="https://linkedin.com/in/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="linkedin montgomeryrd">

            </a>

            <a id="twitter-link" href="https://twitter.com/richard04755318" target="_blank" rel="noopener noreferrer" alt="twitter richard.montgomery.dev">

            </a>
        </div>
    )
}

export default MainContactPage;