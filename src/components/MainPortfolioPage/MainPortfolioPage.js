import Logo from '../Logo/Logo';
import Preview from './Preview/Preview';

import tessioPreview from '../../assets/previews/tessio-preview.png';
import './styles.css';

const MainPortfolioPage = ({ page, setPage }) => {
    return (
        <div className={page}>
            <Logo page={page} setPage={setPage} />
            <main className="main-portfolio-container">
                <h1 id="portfolio-head">recent projects</h1>
                <div className="project-container">
                    <Preview project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                    <Preview project={'tessio'} website={'http://montgomeryrd.github.io/tessio/'} img={tessioPreview} text={'Made with React, a mock restaurant website using a parallax effect'} />
                </div> 
            </main>
        </div>
    )
}

export default MainPortfolioPage;