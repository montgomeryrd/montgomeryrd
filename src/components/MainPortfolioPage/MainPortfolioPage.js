
import Logo from '../Logo/Logo';
import Preview from './Preview/Preview';

import tessioPreview from '../../assets/previews/tessio-preview.png';
import kirksPreview from '../../assets/previews/kirk-preview.png';
import './styles.css';

const MainPortfolioPage = ({ page, setPage, toggle, setToggle }) => {
    
    function reset(name) {
        setToggle(false);
        setPage(name);
    }

    return (
        <div className={page}>
            <Logo setPage={setPage} setToggle={setToggle} />
            <nav className={toggle ? "portfolio-nav-open" : "portfolio-nav-close"}>
                <span id="portfolio-about" onClick={() => reset('about')}>about</span>
                <span id="portfolio-contact" onClick={() => reset('contact')}>contact</span>
            </nav>
            <main className="main-portfolio-container">
                <h1 id="portfolio-head">recent projects</h1>
                <div className="project-container">
                    <Preview 
                        page={page}
                        section={"section-1"} 
                        project={"tessio"} 
                        website={'http://montgomeryrd.github.io/tessio/'} 
                        img={tessioPreview} 
                        text={'Made with React'} 
                        description={'A mock website for a Silverdale pizza and bar restaurant using a parallax effect and responsive design.'}
                    />
                    <Preview 
                        page={page}
                        section={"section-2"} 
                        project={"kirk's app"} 
                        website={'http://montgomeryrd.github.io/tessio-app/'} 
                        img={kirksPreview} 
                        text={'Made with React'} 
                        description={'A simple shopping app for a previous employer to upgrade his supply run experience using mobile-first design and localStorage.'} />
                    {/* <Preview section={"section-3"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview section={"section-4"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview section={"section-5"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview section={"section-6"} project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} /> */}
                </div> 
            </main>
        </div>
    )
}

export default MainPortfolioPage;