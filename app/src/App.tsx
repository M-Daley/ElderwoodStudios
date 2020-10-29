import React from 'react';
import './App.css';

// Function Components
import {
  Navigation,
  Home,
  Gallery,
  Commissions,
  About,
  Contact
} from './components/App';

function App() {
  return (
    <div className="App">
        <span id="Home" style={{ height: 0, width: 0 }}></span>
        <Navigation />
        <Home />
        <Gallery />
        <Commissions />
        <About />
        <Contact />
    </div>
  );
}

export default App;
