import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import MainFrontPage from '../MainFrontPage/MainFrontPage';
import './styles.css';

function Logo({ setPage }) {

    return (
        <Router>
            <header id="logo" onClick={() => setPage('front')}>
                <Route exact path='/' component={MainFrontPage} />
                <NavLink to="/" style={{textDecoration: 'none'}} exact={true}>
                    <span id="first-letter">R</span><span id="second-letter">monty.</span>
                </NavLink>
            </header>
        </Router>
    )
}

export default Logo;