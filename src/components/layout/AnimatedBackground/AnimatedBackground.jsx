// components/layout/AnimatedBackground/AnimatedBackground.jsx
import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div className="floating-orb floating-orb--1"></div>
      <div className="floating-orb floating-orb--2"></div>
      <div className="floating-orb floating-orb--3"></div>
    </div>
  );
};

export default AnimatedBackground;