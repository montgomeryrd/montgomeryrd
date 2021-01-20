import { useState } from 'react';
import MainFrontPage from './components/MainFrontPage/MainFrontPage';
import MainAboutPage from './components/MainAboutPage/MainAboutPage';
import MainPortfolioPage from './components/MainPortfolioPage/MainPortfolioPage';
import MainContactPage from './components/MainContactPage/MainContactPage';
import './styles.css';

function App() {
	const [page, setPage] = useState('front');

	function current(page) {
        switch (page) {
            case 'front':
                return <MainFrontPage setPage={setPage} />;
            case 'about':
                return <MainAboutPage setPage={setPage} />;
            case 'portfolio':
                return <MainPortfolioPage setPage={setPage} />;
            case 'contact':
                return <MainContactPage setPage={setPage} />;
            default:
                break;
		}
	}

	return (
		<div className="App">
			<div className="desktop-App">
				{current(page)}
			</div>
			<div className="mobile-App">
				<MainFrontPage />
				<MainAboutPage />
				<MainPortfolioPage />
				<MainContactPage />
			</div>
		</div>
	);
}

export default App;