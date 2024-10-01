import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/main-logo-black-transparent.png';

export const Navbar = ({ handleSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => handleSectionChange('home')}>Home</li>
        <li onClick={() => handleSectionChange('about')}>About</li>
        <li onClick={() => handleSectionChange('skills')}>Skills</li>
        <li onClick={() => handleSectionChange('projects')}>Projects</li>
        <li onClick={() => handleSectionChange('contact')}>Contact</li>
      </ul>
    </div>
  );
};
