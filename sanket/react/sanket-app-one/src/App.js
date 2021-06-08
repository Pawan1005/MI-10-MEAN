import "./App.css";
import { Fragment } from "react";
import DateClass from "./components/DateClass";
import DateFunction from "./components/DateFunction";
import Clock from "./components/Clock";
import CurrencyConverter from "./components/CurrencyConverter";
import TemperatureConvertor from "./components/TemperatureConvertor";

function App() {
  return (
    <Fragment>
      <DateClass />
      <DateFunction />
      <Clock />
      <CurrencyConverter />
      <TemperatureConvertor />
    </Fragment>
  );
}

export default App;
