// components/Navigation/Navigation.jsx
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSection } from '../../../utils/scrollToSection';
import './Navigation.css';

const Navigation = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          Hariprasath A
        </div>

        <ul className="nav-links desktop-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
