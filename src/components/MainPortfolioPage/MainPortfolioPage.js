import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Preview from './Preview/Preview';
import MainContactPage from '../MainContactPage/MainContactPage';

import tessioPreview from '../../assets/previews/tessio-preview.png';
import kirksPreview from '../../assets/previews/kirk-preview.png';
import './styles.css';

const MainPortfolioPage = ({ page, setPage }) => {
    
    return (
        <div className={page !== 'portfolio' ? "hide-div" : 'portfolio-page-container'}>
            <Logo setPage={setPage} />
            <main className="portfolio-page">
                <h1 id="portfolio-page-title">recent projects</h1>
                <div className="preview-container">
                    <Preview 
                        section={"section-1"} 
                        project={"tessio"} 
                        website={'http://montgomeryrd.github.io/tessio/'} 
                        img={tessioPreview} 
                        text={'Made with React'} 
                        description={'A mock-up website for a Silverdale pizza, beer, and whiskey restaurant using a parallax effect and responsive design.'}
                    />
                    <Preview 
                        section={"section-2"} 
                        project={"kirk's app"} 
                        website={'http://montgomeryrd.github.io/tessio-app/'} 
                        img={kirksPreview} 
                        text={'Made with React'} 
                        description={'A basic shopping app for a previous employer to upgrade his supply-run experience using mobile-first design and localStorage.'} />
                    {/* <Preview section={"section-3"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview section={"section-4"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview section={"section-5"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview section={"section-6"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} /> */}
                </div> 
            </main>
            <Router>
                <NavLink to="/contact" style={{textDecoration: 'none'}}>
                    <button id="portfolio-page-button" onClick={() => setPage('contact')}>
                        Contact
                    </button>
                </NavLink>
                <Route path='/contact' render={props => (
                    <MainContactPage props={props}/>
                )} />
            </Router>
        </div>
    )
}

export default MainPortfolioPage;