// components/common/ProgressBar/ProgressBar.jsx
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  return (
    <div 
      className="progress-bar"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
};

export default ProgressBar;