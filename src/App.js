import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorksScreen from './screens/WorksScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';

function App() {
  return (
    <div className="pimg1">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/about" component={AboutScreen} />
            <Route path="/works" component={WorksScreen} />
            <Route path="/contact" component={ContactScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;