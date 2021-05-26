import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.timer(), 1000);
  }

  timer() {
    this.setState({ time: new Date() });
  }

  render() {
    return (
      <div style={{ margin: 50 }}>
        <h1>Clock</h1>
        {this.state.time.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
