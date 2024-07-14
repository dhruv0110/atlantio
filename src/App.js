import React from 'react';
import Hero from './components/Hero/Hero';
import Navbars from './components/Navbar/Navbar';
import './App.css'; // Import the CSS file
import Company from './components/Company/Company';

const App = () => {
  return (
    <div className='App'>
      <div className="picture">
        <div className="containers">
        <Navbars className="navbar-custom"/>
        <Hero className="hero-custom"/>
        </div>
      </div>
      <div className="containers" style={{height:"600px"}}>
        <Company/>
      </div>
    </div>
  );
};

export default App;
