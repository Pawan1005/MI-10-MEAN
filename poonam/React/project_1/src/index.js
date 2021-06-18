import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassComp from './Component/class'
import State from './Component/state'
import FunComp from './Component/funComp';
import Clock from './Component/clock'
import Currency from './Component/currency'
import Temperature from './Component/temperature'
import Counter from './Component/counter'
import Input from './Component/input'
import Fruitlist from './Component/fruitlist'
ReactDOM.render(
  <div>
    <App />
    <ClassComp />
    <FunComp />
    <Clock />
    <State />
    <Currency />
    <Temperature />
    <Counter />
    <Input />
    <Fruitlist/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
