import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>TOI Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;