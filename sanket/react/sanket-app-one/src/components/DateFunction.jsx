import React from "react";

function DateFunction(props) {
  return (
    <div style={{ margin: 50 }}>
      <h1>function Component</h1>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <p>Day: {new Date().toLocaleString("en-CA", { weekday: "long" })}</p>
      <p>Time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default DateFunction;
