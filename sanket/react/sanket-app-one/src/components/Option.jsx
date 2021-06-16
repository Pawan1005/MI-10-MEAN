import React, { Component } from "react";

class Option extends Component {
  state = {
    option: "",
    selectedOption: "",
  };

  handelShow = () => {
    let selectedOption = this.state.selectedOption;
    if (this.state.option === "")
      return this.setState({ selectedOption: "Please select an option" });
    selectedOption = "you have selected " + this.state.option;
    this.setState({ selectedOption });
  };

  render() {
    return (
      <div className="container my-5">
        <select
          className="form-select w-50"
          onChange={(e) => this.setState({ option: e.target.value })}
        >
          <option value="">Open select menu</option>
          <option value="Palindrome">Palindrome</option>
          <option value="Fibonacci">Fibonacci</option>
          <option value="Factorial">Factorial</option>
          <option value="Armstrong">Armstrong</option>
        </select>
        <button onClick={this.handelShow} className="btn btn-primary my-2 me-4">
          Show
        </button>
        <span>{this.state.selectedOption}</span>
        <hr />
      </div>
    );
  }
}

export default Option;
