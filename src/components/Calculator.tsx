import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import '../styles/Calculator.css';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');
  const [firstOperand, setFirstOperand] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState<boolean>(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(display);
    } else if (operator) {
      const result = calculate(parseFloat(firstOperand), inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(String(result));
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand: number, secondOperand: number, operator: string): number => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  const handleKeypad = (key: string) => {
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        inputDigit(key);
        break;
      case '.':
        inputDecimal();
        break;
      case 'C':
        clearDisplay();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        performOperation(key);
        break;
      case '=':
        if (firstOperand && operator) {
          performOperation('=');
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onKeyClick={handleKeypad} />
    </div>
  );
};

export default Calculator;