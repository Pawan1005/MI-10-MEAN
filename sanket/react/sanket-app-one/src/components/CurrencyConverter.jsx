import React, { Component } from "react";

class CurrencyConverter extends Component {
  state = {
    amount: null,
    convert: null,
    selectUnit: null,
  };

  handelConvert = () => {
    const { selectUnit, amount } = this.state;

    if (selectUnit === null || amount < 0 || amount === null || isNaN(amount))
      return;

    const convert =
      selectUnit === "Pound" ? (
        <span>Amount in Rs: {amount * 102.94}</span>
      ) : (
        <span>Amount in Rs: {amount * 72.69}</span>
      );

    this.setState({ convert });
  };

  render() {
    return (
      <div style={{ margin: 50 }}>
        <h1>Currency Convertor</h1>
        <label htmlFor="c">Amount: </label>
        <input
          type="text"
          id="c"
          onChange={(e) => {
            this.setState({ amount: e.target.value });
          }}
        />{" "}
        <select
          onChange={(e) => {
            this.setState({ selectUnit: e.target.value });
          }}
        >
          <option value="N/A">select</option>
          <option value="Pound">Pound</option>
          <option value="Dollar">United States Dollar</option>
        </select>{" "}
        <button onClick={this.handelConvert}>Calculate</button>{" "}
        <span>{this.state.convert}</span>
      </div>
    );
  }
}

export default CurrencyConverter;
