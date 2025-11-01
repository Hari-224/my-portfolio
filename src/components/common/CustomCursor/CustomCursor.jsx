
import React from 'react';
import './CustomCursor.css';

const CustomCursor = ({ position }) => {
  return (
    <div
      className="custom-cursor"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CustomCursor;
