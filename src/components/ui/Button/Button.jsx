import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  icon,
  iconPosition = 'left',
  className = '',
  onClick,
  ...props 
}) => {
  const buttonClass = `
    button 
    button--${variant} 
    button--${size} 
    ${disabled ? 'button--disabled' : ''} 
    ${className}
  `.trim();

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="button__icon button__icon--left">
          {icon}
        </span>
      )}
      
      <span className="button__text">
        {children}
      </span>
      
      {icon && iconPosition === 'right' && (
        <span className="button__icon button__icon--right">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;