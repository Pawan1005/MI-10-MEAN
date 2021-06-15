import React, { Component } from "react";

class AssignmentCounter extends Component {
  state = {
    value: 0,
  };

  handelIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handelDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <div className="container">
        <h3>Counter</h3>
        <button
          disabled={this.state.value === 10}
          onClick={this.handelIncrement}
          className="btn btn-primary"
        >
          +
        </button>
        <span className="badge bg-dark mx-3">{this.state.value}</span>
        <button
          disabled={this.state.value === 0}
          onClick={this.handelDecrement}
          className="btn btn-secondary"
        >
          -
        </button>
        <hr />
      </div>
    );
  }
}

export default AssignmentCounter;
