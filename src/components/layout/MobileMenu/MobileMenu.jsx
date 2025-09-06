import React, { useState } from 'react';
import { scrollToSection } from '../../../utils/scrollToSection';
import { NAVIGATION_ITEMS } from '../../../data/constants';
import { FaTimes } from 'react-icons/fa';
import './MobileMenu.css';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const [activeItem, setActiveItem] = useState('');

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setActiveItem(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
      <button
        className="mobile-menu-close"
        onClick={() => setIsMenuOpen(false)}
        aria-label="Close mobile menu"
      >
        <FaTimes />
      </button>
      <div className="mobile-menu-items">
        {NAVIGATION_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`mobile-menu-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
