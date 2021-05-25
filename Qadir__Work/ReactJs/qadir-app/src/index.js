import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TimerClass from './Components/TimerClass';
import Counter from './Components/Counter';
import Timer from './Components/Timer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TimerClass />
    <Counter addTwo={2} />
  </React.StrictMode>,
  document.getElementById('root')
);

// Creating new element div adding component to it.
const divElement = document.body.appendChild(document.createElement('div'));

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Timer date={new Date()} />
    </React.StrictMode>,
    divElement
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
