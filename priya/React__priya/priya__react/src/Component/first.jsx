import React, { Component } from "react";
import react from "react";
import ReactDom from "react-dom";

class First extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }
  render() {
    const date = new Date();
    let day = ["sun", "mon", "tue", "wed", "thus", "fri", "sat"];
    return (
      <div>
        <h2>today is {date.toLocaleTimeString} </h2>
        <h2>day{day[date.getDay()]} </h2>
      </div>
    );
  }
}
export default First;
