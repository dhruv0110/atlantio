import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import "./Navbar.css";

const Navbars = ({ className }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar expand="lg" className={`navbar-dark ${className}`} expanded={expanded} style={{ padding: "25px 30px" }}>
        <Container>
          <Navbar.Brand href="#home" className="d-none d-lg-block mx-auto">
            <Image src="./Logo.svg" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Brand href="#home" className="d-lg-none">
            <Image src="./Logo.svg" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{borderRadius:"50%",border:"none"}}
            onClick={handleToggle}
            className={`custom-toggler ${expanded ? 'open' : ''}`}
          >
            <div className={`hamburger ${expanded ? 'open' : ''}`}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='shadow1'>Home</Nav.Link>
              <div className="nav-separator"></div>
              <Nav.Link href="#service" className='shadow'>Services</Nav.Link>
              <div className="nav-separator"></div>
              <Nav.Link href="#about" className='shadow'>About</Nav.Link>
              <div className="nav-separator mb-2"></div>
            </Nav>
            <div className="pricing mt-3">
              <button className='price'>Pricing & Plans</button>
              <button className='contacts mx-2'>Contact Us</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-separator-bottom mt-1"></div>
    </>
  );
};

export default Navbars;
