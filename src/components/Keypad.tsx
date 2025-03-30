import React from 'react';
import Button from './Button';
import '../styles/Keypad.css';

interface KeypadProps {
  onKeyClick: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onKeyClick }) => {
  return (
    <div className="calculator-keypad">
      <div className="keypad-row">
        <Button label="7" onClick={() => onKeyClick('7')} />
        <Button label="8" onClick={() => onKeyClick('8')} />
        <Button label="9" onClick={() => onKeyClick('9')} />
        <Button label="/" onClick={() => onKeyClick('/')} isOperator />
      </div>
      <div className="keypad-row">
        <Button label="4" onClick={() => onKeyClick('4')} />
        <Button label="5" onClick={() => onKeyClick('5')} />
        <Button label="6" onClick={() => onKeyClick('6')} />
        <Button label="*" onClick={() => onKeyClick('*')} isOperator />
      </div>
      <div className="keypad-row">
        <Button label="1" onClick={() => onKeyClick('1')} />
        <Button label="2" onClick={() => onKeyClick('2')} />
        <Button label="3" onClick={() => onKeyClick('3')} />
        <Button label="-" onClick={() => onKeyClick('-')} isOperator />
      </div>
      <div className="keypad-row">
        <Button label="0" onClick={() => onKeyClick('0')} />
        <Button label="." onClick={() => onKeyClick('.')} />
        <Button label="=" onClick={() => onKeyClick('=')} isEquals />
        <Button label="+" onClick={() => onKeyClick('+')} isOperator />
      </div>
      <div className="keypad-row">
        <Button label="C" onClick={() => onKeyClick('C')} isClear />
      </div>
    </div>
  );
};

export default Keypad;