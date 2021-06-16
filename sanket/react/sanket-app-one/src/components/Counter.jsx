import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement } = this.props;

    return (
      <div className="my-2">
        <button
          onClick={onIncrement}
          className="btn btn-primary"
          disabled={counter.value === 10}
        >
          +
        </button>

        <span className="badge bg-dark mx-3">{counter.value}</span>

        <button
          onClick={onDecrement}
          className="btn btn-secondary"
          disabled={counter.value === 0}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
