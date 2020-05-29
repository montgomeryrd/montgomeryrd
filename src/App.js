import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Profile from './components/profile/Profile';
import Projects from './components/projects/Projects';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Profile />
        <Projects />
      </div>
    );
  }
}

export default App;