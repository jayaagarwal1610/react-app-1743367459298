import React from 'react';
import '../styles/Display.css';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return <div className="calculator-display">{value}</div>;
};

export default Display;