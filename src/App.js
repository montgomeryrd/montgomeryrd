import MainFrontPage from './components/MainFrontPage/MainFrontPage';
import MainAboutPage from './components/MainAboutPage/MainAboutPage';
import MainPortfolioPage from './components/MainPortfolioPage/MainPortfolioPage';
import MainContactPage from './components/MainContactPage/MainContactPage';
import './styles.css';

function App() {
	return (
		<div className="App">
			<MainFrontPage />
			<MainAboutPage />
			<MainPortfolioPage />
			<MainContactPage />
		</div>
	);
}

export default App;