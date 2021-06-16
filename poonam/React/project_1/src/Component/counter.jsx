import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'
export class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.reset = this.reset.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    };
    reset() {
        this.setState({
            counter: this.state.counter = 0
        });
    }
    incrementCounter() {
        if (this.state.counter >= 10) {
            alert("The value is greater than TEN.");
            this.setState({
                counter: 10
            });
        }
        else {
            this.setState({
                counter: this.state.counter + 1
            });
        }
    }

    decrementCounter() {
        if (this.state.counter <= 0) {
            alert("The value is less than ZERO.");
            this.setState({
                counter: 0
            });
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }

    render() {
        return (
            <div>
                <h3>Assignment 2</h3>
                <Button variant="primary" className="ml-5" onClick={() => this.reset()}> Reset </Button> <br /><br />
                <Button variant="primary" className="ml-5" onClick={() => this.incrementCounter()} disabled={this.state.counter === 10}> + </Button>
                <Badge variant="success" className="ml-5" >  <h5>{this.state.counter}</h5>  </Badge>
                <Button variant="primary" className="ml-5" onClick={() => this.decrementCounter()} disabled={this.state.counter === 0}> - </Button> <br /><br />
                <hr />
            </div>
        )
    }
}

export default Counter;
