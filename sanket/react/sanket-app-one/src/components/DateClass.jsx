import React, { Component } from "react";

class DateClass extends Component {
  render() {
    return (
      <div style={{ margin: 50 }}>
        <h1>Class Component</h1>
        <p>Date: {new Date().toLocaleDateString()}</p>
        <p>Day: {new Date().toLocaleString("en-CA", { weekday: "long" })}</p>
        <p>Time: {new Date().toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default DateClass;
