import "./App.css";
import { Fragment } from "react";
import DateClass from "./components/DateClass";
import DateFunction from "./components/DateFunction";
import Clock from "./components/Clock";

function App() {
  return (
    <Fragment>
      <DateClass />
      <DateFunction />
      <Clock />
    </Fragment>
  );
}

export default App;
