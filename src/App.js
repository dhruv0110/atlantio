import React from 'react';
import Hero from './components/Hero/Hero';
import Navbars from './components/Navbar/Navbar';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <div className='App'>
      <div className="picture">
        <Navbars className="navbar-custom"/>
        <Hero className="hero-custom"/>
      </div>
    </div>
  );
};

export default App;
