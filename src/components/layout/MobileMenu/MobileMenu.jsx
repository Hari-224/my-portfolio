// components/layout/MobileMenu/MobileMenu.jsx
import React from 'react';
import { scrollToSection } from '../../../utils/scrollToSection';
import { NAVIGATION_ITEMS } from '../../../data/constants';
import './MobileMenu.css';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
      {NAVIGATION_ITEMS.map((item) => (
        <div
          key={item.id}
          className="mobile-menu-item"
          onClick={() => handleNavClick(item.id)}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;