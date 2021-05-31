import React, { Component } from "react";

class TemperatureConvertor extends Component {
  state = {
    temperature: null,
    result: null,
    selectValue: null,
  };

  handelConvert = () => {
    const { temperature, selectValue } = this.state;

    if (selectValue === null || temperature === null || isNaN(temperature))
      return;

    const result =
      selectValue === "Celsius" ? (
        <span>
          {Math.round(temperature * (9 / 5) + 32)}
          <sup>o</sup>F
        </span>
      ) : (
        <span>
          {Math.round((temperature - 32) * (5 / 9))}
          <sup>o</sup>C
        </span>
      );

    this.setState({ result });
  };

  render() {
    return (
      <div style={{ margin: 50 }}>
        <h1>Temperature Convertor</h1>
        <label htmlFor="t">Temperature: </label>
        <input
          type="text"
          id="t"
          onChange={(e) => this.setState({ temperature: e.target.value })}
        />{" "}
        <select
          onChange={(e) => this.setState({ selectValue: e.target.value })}
        >
          <option value="">select</option>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>{" "}
        <button onClick={this.handelConvert}>Convert</button>{" "}
        <span>{this.state.result}</span>
      </div>
    );
  }
}

export default TemperatureConvertor;
