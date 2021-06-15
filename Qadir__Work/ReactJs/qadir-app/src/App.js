import React from 'react';
import TimerClass from './Components/TimerClass';
import Counter from './Components/Counter';
import TemperatureConverter from './Components/TemperatureConverter';
import CurrencyConverter from './Components/CurrencyConverter';
import './App.css';
import MathematicalOperaions from './Components/MathematicalOperations';
import FoucsInputValue from './Components/FoucsInputValue';
import MasterCounter from './Components/MasterCounter';
import CrudOperations from './Components/CrudOperations';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      {/* <CurrencyConverter />
      <TemperatureConverter />
      <TimerClass />
      <Counter addTwo={2} /> */}
      {/* <MathematicalOperaions />
      <hr />
      <FoucsInputValue /> */}
      <MasterCounter />
      <CrudOperations />
      <TodoList />
    </div>
  );
}

export default App;
