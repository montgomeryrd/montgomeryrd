import { useState } from 'react';
import MenuBurger from './components/MenuBurger/MenuBurger';

import './styles.css';

function App() {
	const [page, setPage] = useState('front');

	return (
		<div className="App">
			<MenuBurger page={page} setPage={setPage} />
		</div>
	);
}

export default App;