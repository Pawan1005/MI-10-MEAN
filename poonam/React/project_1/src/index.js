import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Currency from './Component/currency';
import Temperature from './Component/temperature';
import Counter from './Component/counter'
import Input from './Component/input';
ReactDOM.render(
  <div>
    <Currency />
    <Temperature />
    <Counter />
    <Input />
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
