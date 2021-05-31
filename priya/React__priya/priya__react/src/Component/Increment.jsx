import React, { Component } from "react";

class Increment extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  displayCount() {
    return this.state.count;
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    const { count } = this.state;
    return (
      <div className={"text-center"}>
        <h4>Counter</h4>
        <button
          disabled={this.state.count == 10} onClick={this.handleClick} className={"btn btn-primary "}>+</button>
        <span className={"badge bg-light m-2"}>{this.displayCount()}</span>
        <button disabled={this.state.count == 0} onClick={this.handleChange}className={"btn btn-primary "} > - </button>
      </div>
    );
  }
}
export default Increment;
