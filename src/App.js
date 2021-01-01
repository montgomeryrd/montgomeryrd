import { useState } from 'react';
import FrontPage from './components/FrontPage/FrontPage';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';

import './styles.css';

function App() {
	const [page, setPage] = useState('front');

	function locate(page) {
		switch(page) {
			case 'front':
				return <FrontPage page={page} setPage={setPage} />
			case 'about':
				return <About page={page} setPage={setPage} />
			case 'works':
				return <Works page={page} setPage={setPage} />
			case 'contact':
				return <Contact page={page} setPage={setPage} />
			default:
				break;
		}
	};
	
	return (
		<div className="App">
			{locate(page)}
		</div>
	);
}

export default App;