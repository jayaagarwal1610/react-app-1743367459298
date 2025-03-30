import React from 'react';
import '../styles/Button.css';

interface ButtonProps {
  label: string;
  onClick: () => void;
  isOperator?: boolean;
  isEquals?: boolean;
  isClear?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  isOperator = false, 
  isEquals = false,
  isClear = false
}) => {
  const className = `calculator-button ${isOperator ? 'operator' : ''} ${
    isEquals ? 'equals' : ''
  } ${isClear ? 'clear' : ''}`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;