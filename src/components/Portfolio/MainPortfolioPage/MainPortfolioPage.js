import tessioPreview from '../../../assets/previews/tessio-preview.png';
import './styles.css';

const MainPortfolioPage = () => {
    return (
        <div className="main-portfolio-container">
            <h1>recent projects</h1>
            <div className="project-container">
                <div className="project-view">
                    <h2>Tessio Mock Site</h2>
                    <a href="http://montgomeryrd.github.io/tessio/" target="_blank" rel="noopener noreferrer" alt="Link to Tessio Website">
                        <img src={tessioPreview} width="400px" alt="Tessio Website" />
                    </a>
                    <div className="blah-bar">Mock restaurant website using React and styled with a parallax effect.</div>
                </div>
                <div className="project-view">
                    <h2>Tessio Mock Site</h2>
                    <a href="http://montgomeryrd.github.io/tessio/" target="_blank" rel="noopener noreferrer" alt="Link to Tessio Website">
                        <img src={tessioPreview} width="400px" alt="Tessio Website" />
                    </a>
                    <div className="blah-bar">Produced a mock restaurant website using React and styled with a parallax effect.</div>
                </div>
                <div className="project-view">
                    <h2>Tessio Mock Site</h2>
                    <a href="http://montgomeryrd.github.io/tessio/" target="_blank" rel="noopener noreferrer" alt="Link to Tessio Website">
                        <img src={tessioPreview} width="400px" alt="Tessio Website" />
                    </a>
                    <div className="blah-bar">Produced a mock restaurant website using React and styled with a parallax effect.</div>
                </div>
                <div className="project-view">
                    <h2>Tessio Mock Site</h2>
                    <a href="http://montgomeryrd.github.io/tessio/" target="_blank" rel="noopener noreferrer" alt="Link to Tessio Website">
                        <img src={tessioPreview} width="400px" alt="Tessio Website" />
                    </a>
                    <div className="blah-bar">Mock restaurant website using React and styled with a parallax effect.</div>
                </div>
                <div className="project-view">
                    <h2>Tessio Mock Site</h2>
                    <a href="http://montgomeryrd.github.io/tessio/" target="_blank" rel="noopener noreferrer" alt="Link to Tessio Website">
                        <img src={tessioPreview} width="400px" alt="Tessio Website" />
                    </a>
                    <div className="blah-bar">Produced a mock restaurant website using React and styled with a parallax effect.</div>
                </div>
                <div className="project-view">
                    <h2>Tessio Mock Site</h2>
                    <a href="http://montgomeryrd.github.io/tessio/" target="_blank" rel="noopener noreferrer" alt="Link to Tessio Website">
                        <img src={tessioPreview} width="400px" alt="Tessio Website" />
                    </a>
                    <div className="blah-bar">Produced a mock restaurant website using React and styled with a parallax effect.</div>
                </div>
            </div>
        </div>
    )
}

export default MainPortfolioPage;