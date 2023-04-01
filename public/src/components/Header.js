
// a tag is used to move to the section or be scrolled down to the section 

import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "/792f5bf2487bd27628a54fe64a712630.png";
import "./Header.css";

const Header = () => {
  const handleScrollToServices = () => {
    document.getElementById('services-section').scrollIntoView();
  }

  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="header-logo" />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/" className="header-nav-link">Home</Link>
            </li>
            <li className="header-nav-item">
              <a href="#services-section" className="header-nav-link">Services</a>
            </li>
            <li className="header-nav-item">
              <Link to="/portfolio" className="header-nav-link">Portfolio</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/company" className="header-nav-link">Company</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/events" className="header-nav-link">Events</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/media" className="header-nav-link">Media</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <button className="header-button" onClick={handleScrollToServices}>Let's Talk</button>
      </div>
    </header>
  );
}

export default Header;
