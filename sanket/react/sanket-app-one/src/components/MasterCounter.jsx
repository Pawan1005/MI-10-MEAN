import React, { Component } from "react";
import Counter from "./Counter";

class MasterCounter extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handelIncrement = (counter) => {
    const counters = [...this.state.counters];
    counter.value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    counter.value--;
    this.setState({ counters });
  };

  handelReset = () => {
    const counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState({ counters });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.handelReset} className="btn btn-danger mt-3">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={() => this.handelIncrement(counter)}
            onDecrement={() => this.handleDecrement(counter)}
          />
        ))}
        <hr />
      </div>
    );
  }
}

export default MasterCounter;
