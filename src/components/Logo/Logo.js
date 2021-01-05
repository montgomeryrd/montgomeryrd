import './styles.css';

function Logo({ page, setPage }) {
    return (
        <header id="logo">
            <h1 onClick={() => setPage('front')}>Rm</h1>
        </header>
    );
}

export default Logo;