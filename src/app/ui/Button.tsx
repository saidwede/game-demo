"use client"
import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}
  
  // Create the Button component
  const Button: React.FC<ButtonProps> = ({ onClick, children, disabled = false, className = '' }) => {
    return (
        <div 
            className={`${className} relative cursor-pointer inline-block`} 
            onClick={onClick}
        >
          <img className="w-40" src="/buttons/blue-button.svg" alt="" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black flex items-center">
            {children}
          </div>
        </div>
    );
  };
  
  export default Button;