import React, { Component } from "react";

class TempConv extends Component {
  constructor() {
    super();
    this.state = {
      inpvalue: 0,
      tempvalue: 0,
      clabel: "C",
      flabel: "F",
      label: "",
      selectvalue: "SelectConverter",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inpvalue: parseInt(event.target.value) });
  }
  handleSelect(event) {
    this.setState({ selectvalue: event.target.value });
  }
  handleClick(event) {
    event.preventDefault();
    let temp = 0;
    if (this.state.selectvalue == "celcius") {
      temp = this.state.inpvalue * (9 / 5) + 32;
      this.setState({ tempvalue: temp });
      this.setState({ label: this.state.flabel });
    } else {
      temp = (this.state.inpvalue - 32) * (5 / 9);
      this.setState({ tempvalue: temp });
      this.setState({ label: this.state.clabel });
    }
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <select id="dropdown" onChange={this.handleSelect}>
          <option value="SelectConverter">SelectConverter</option>
          <option value="celcius">Celcius</option>
          <option value="farhenheit">Farhenheit</option>
        </select>
        <button
          disabled={this.state.selectvalue == "SelectConverter"}
          onClick={this.handleClick}>Convert</button>
        <span>
          {this.state.tempvalue}
          {this.state.label}
        </span>
      </div>
    );
  }
}

export default TempConv;
