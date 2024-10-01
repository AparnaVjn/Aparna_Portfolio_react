import React from 'react';
import './home.css';
import profileImage from '../../assets/profile-picture.jpg';

export const Home = ({ onNavClick }) => {
  return (
    <div className="home-container">
      <div className="content-section">
        <h1 className="profile-name">Aparna Vijayan</h1>
        <h2 className="profile-role">I'm a passionate MERN Stack Web Developer</h2>
        <nav className="nav-links">
          <a href="#about" onClick={() => onNavClick("about")}>About</a>
          <a href="#skills" onClick={() => onNavClick("skills")}>Skills</a>
          <a href="#projects" onClick={() => onNavClick("projects")}>Projects</a>
          <a href="#contact" onClick={() => onNavClick("contact")}>Contact</a>
        </nav>
        <div className="social-icons">
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/aparna-vijayan-9131872a0/"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="image-section">
        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};
