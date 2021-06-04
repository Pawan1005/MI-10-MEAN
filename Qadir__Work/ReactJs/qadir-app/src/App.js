import React from 'react';
import TimerClass from './Components/TimerClass';
import Counter from './Components/Counter';
import TemperatureConverter from './Components/TemperatureConverter';
import CurrencyConverter from './Components/CurrencyConverter';
import './App.css';

function App() {
  return (
    <div className="App">
      <CurrencyConverter />
      <TemperatureConverter />
      <TimerClass />
      <Counter addTwo={2} />
    </div>
  );
}

export default App;
