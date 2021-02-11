import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorksScreen from './screens/WorksScreen';
import SkillsAndEducationScreen from './screens/SkillsAndEducationScreen';
import Footer from './components/Footer';

import ScrollToTop from './utils/ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<main className="desktop">
				<Container>
					<Route exact path="/montgomeryrd" component={HomeScreen} />
					<Route exact path="/about" component={AboutScreen} />
					<Route exact path="/works" component={WorksScreen} />
					<Route exact path="/skills" component={SkillsAndEducationScreen} />
				</Container>
				<Footer />
			</main>
			<main className="mobile">
				<Container>
					<HomeScreen />
					<AboutScreen />
					<WorksScreen />
					<SkillsAndEducationScreen />
					<Footer />
				</Container>
			</main>
		</Router>
	);
}

export default App;