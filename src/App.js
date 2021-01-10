import { useState } from 'react';
import MainFrontPage from './components/MainFrontPage/MainFrontPage';
import MainAboutPage from './components/MainAboutPage/MainAboutPage';
import MainPortfolioPage from './components/MainPortfolioPage/MainPortfolioPage';
import MainContactPage from './components/MainContactPage/MainContactPage';
import './styles.css';

function App() {
	const [toggle, setToggle] = useState(false);
	const [page, setPage] = useState('front');

	function current(page) {
        switch (page) {
            case 'front':
                return <MainFrontPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            case 'about':
                return <MainAboutPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            case 'portfolio':
                return <MainPortfolioPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            case 'contact':
                return <MainContactPage page={page} setPage={setPage} toggle={toggle} setToggle={setToggle} />;
            default:
                break;
        }
    }

	return (
		<div className="App">
			{current(page)}
		</div>
	);
}

export default App;