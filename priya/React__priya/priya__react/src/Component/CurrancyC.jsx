import React, { Component } from "react";
class CurrancyC extends Component {
  constructor() {
    super();
    this.state = {
      inpvalue: 0,
      convertAmount: 0,
      selectvalue: "Select Currancy",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleChange(event) {
    this.setState({ inpvalue: parseInt(event.target.value) });
  }
  handleSelect(event) {
    this.setState({ selectvalue: event.target.value });
  }
  handleClick(event) {
    event.preventDefault();
    let amount = 0;
    if (this.state.selectvalue == "Us Dollar") {
      amount = this.state.inpvalue * 72.42;
      this.setState({ convertAmount: amount });
    } else {
      amount = this.state.inpvalue * 82.86;
      this.setState({ convertAmount: amount });
    }
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <select id="dropdown" onChange={this.handleSelect}>
          <option value="Select Currancy">Select Currancy</option>
          <option value="Us Dollar">Us Dollar</option>
          <option value="Pound">Pound</option>
        </select>
        <button
          disabled={this.state.selectvalue === "Select Currancy"}
          onClick={this.handleClick}>Calculate</button>
        <span>Rs. {this.state.convertAmount} </span>
      </div>
    );
  }
}
export default CurrancyC;
