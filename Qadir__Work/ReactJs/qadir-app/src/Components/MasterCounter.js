import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Counters from './Counters';

export default class MasterCounter extends Component {
    state = {
        counters: [
          { id: 1, value: 4},
          { id: 2, value: 2},
          { id: 3, value: 1}
        ]
      }

      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        // counter.value++;
        this.setState({ counters });
      };

      handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
      };

      handleReset = () => {
        const isFlag = window.confirm("You want to reset Counter?");
        if (isFlag) {
            const counters = this.state.counters.map(count =>
              { count.value = 0;
                  return count;
              });
            this.setState({ counters });
        }
      };

      handleDelete = (counterId) => {
        const counters = this.state.counters.filter(count => count.id !== counterId);
        this.setState({ counters });
      };

    render() {
        return (
            <div>
                <Button onClick={this.handleReset} variant="warning">Reset</Button>
                { this.state.counters.map(counter => 
                <Counters 
                  key = {counter.id} 
                  onDelete = {this.handleDelete}
                  onIncrement = {this.handleIncrement} 
                  onDecrement = {this.handleDecrement}
                  counter = {counter}
                />)}
            </div>
        )
    }
}
