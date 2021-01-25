import { useState } from 'react';
import MainFrontPage from './components/MainFrontPage/MainFrontPage';
import MainAboutPage from './components/MainAboutPage/MainAboutPage';
import MainPortfolioPage from './components/MainPortfolioPage/MainPortfolioPage';
import MainContactPage from './components/MainContactPage/MainContactPage';
import './styles.css';

function App() {

	const [page, setPage] = useState('front');

	return (
		<div className="App">
			<MainFrontPage page={page} setPage={setPage} />
			<MainAboutPage page={page} setPage={setPage} />
			<MainPortfolioPage page={page} setPage={setPage} />
			<MainContactPage page={page} setPage={setPage} />
		</div>
	);
}

export default App;