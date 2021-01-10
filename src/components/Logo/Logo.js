import './styles.css';

function Logo({ setPage, setToggle }) {

    function reset(name) {
        setToggle(false);
        setPage(name);
    }

    return (
        <header id="logo" onClick={() => reset('front')}>
            <span id="first-letter">R</span><span id="second-letter">monty.</span>
        </header>
    )
}

export default Logo;