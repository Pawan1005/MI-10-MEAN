import React, { Component } from 'react'

export class State extends Component {
    constructor() {
        super();

        this.state = { value: 1 };
    }
    componentDidMount() {
        this.timer = setInterval(() => this.counter(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    counter() {
        this.setState({ value: this.state.value + 1 });
    }
    render() {
        return (
            <div>
                <h2>Learn State and setState</h2>

                <p>Value is {this.state.value}</p>
            </div>
        )
    }
}

export default State;
