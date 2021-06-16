import "./App.css";
import { Fragment } from "react";
import DateClass from "./components/DateClass";
import DateFunction from "./components/DateFunction";
import Clock from "./components/Clock";
import CurrencyConverter from "./components/CurrencyConverter";
import TemperatureConvertor from "./components/TemperatureConvertor";
import "bootstrap/dist/css/bootstrap.css";
import CurdOperations from "./components/CurdOperations";
import MasterCounter from "./components/MasterCounter";
import AssignmentCounter from "./components/AssignmentCounter";
import Option from "./components/Option";
import ParentForwardingRefs from "./components/ParentForwardingRefs";
import FruitList from "./components/FruitList";

function App() {
  return (
    <Fragment>
      <FruitList />
      <ParentForwardingRefs />
      <Option />
      <MasterCounter />
      <CurdOperations />
      <AssignmentCounter />
      <DateClass />
      <DateFunction />
      <Clock />
      <CurrencyConverter />
      <TemperatureConvertor />
    </Fragment>
  );
}

export default App;
