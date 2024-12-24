import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <img src={logo} className="logo" alt="logo" />
      <button 
        className="mobile-menu-button"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      <nav className={isMenuOpen ? 'open' : ''}>
        <ul>
          <li><a href="#about" onClick={closeMenu}><span>01.</span>about</a></li>
          <li><a href="#projects" onClick={closeMenu}><span>02.</span>projects</a></li>
          <li><a href="#skills" onClick={closeMenu}><span>03.</span>skills</a></li>
          <li><a href="#contact" onClick={closeMenu}><span>04.</span>contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;