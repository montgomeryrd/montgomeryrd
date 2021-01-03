import './styles.css';

function Logo({ page, setPage }) {
    return (
        <div id="logo">
            <h1 id={`${page}-logo`} onClick={() => setPage('front')}>Rm</h1>
        </div>
    );
}

export default Logo;