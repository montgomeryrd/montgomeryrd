import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import MainAboutPage from '../MainAboutPage/MainAboutPage';
import MainPortfolioPage from '../MainPortfolioPage/MainPortfolioPage';
import Logo from '../Logo/Logo';
import './styles.css';

function MainContactPage({ setPage }) {
    return (
        <div className="contact-page-container">
            <Logo setPage={setPage} />
            <Router>
                <nav className="contact-page-nav">
                    <ul style={{listStyle: 'none'}}>
                        <NavLink to="/about" style={{textDecoration: 'none'}}>
                            <li onClick={() => setPage('about')}>about</li>
                        </NavLink>
                        <NavLink to="/portfolio" style={{textDecoration: 'none'}}>
                            <li onClick={() => setPage('portfolio')}>works</li>
                        </NavLink>
                    </ul>
                    <Route path='/about' render={props => (
                        <MainAboutPage props={props}/>
                        )} />
                    <Route path='/portfolio' render={props => (
                        <MainPortfolioPage props={props}/>
                    )} />
                </nav>
            </Router>
            <main className='contact-page'>
                <section className="contact">
                    <div className="container">
                        <h1>Get in touch</h1>
                        <p>Please enter your contact information and I will try and respond in a timely fashion</p>

                        <form>
                            <div className="form-group">
                                <label for="firstname">First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    required
                                    className="form-element"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-group">
                                <label for="lastname">Last Name</label>
                                <input 
                                    type="text" 
                                    name="lastname" 
                                    id="lastname" 
                                    required 
                                    className="form-element" 
                                    placeholder="" 
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    className="form-element" 
                                    placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="company">Company</label>
                                <input 
                                    type="text" 
                                    name="company" 
                                    id="company" 
                                    className="form-element" 
                                    placeholder="" />
                            </div>
                            <div class="form-group full">
                                <label for="message">What are you looking for?</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    className="form-element" 
                                    placeholder=""></textarea>
                            </div>
                            <div class="submit-group">
                                <input type="submit" value="SEND MESSAGE" />
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <nav className="contact-me-links">
                <div id="in-link">
                    <a id="in-link-logo" href="https://linkedin.com/in/montgomeryrd" target="_blank" rel="noopener noreferrer" alt="linkedin montgomeryrd">
                        in
                    </a>
                </div>
                <div id="t-link">
                    <a id="t-link-logo" href="https://twitter.com/richard04755318" target="_blank" rel="noopener noreferrer" alt="twitter richard.montgomery.dev">
                        t
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default MainContactPage;