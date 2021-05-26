import React, { Component } from 'react'

class TimerClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        // using setInterval method for updating date value every 1 second
        this.timer = setInterval(() => this.clock(), 1000);
    }

    // using setState method for updating Date value
    clock() {
        this.setState({
            date: new Date()
        });
    }

    componentWillUnmount() {
        // If component remove this.timer and clearInterval method stop the time.
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="App">
                <h1>The Class Component With setState Method</h1>
                <h2>
                    Today Date: {this.state.date.toLocaleString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})}
                </h2>
                <h2>Day: {this.state.date.toLocaleString('en-US', { weekday: 'long' })}</h2>
                <h2>Current Time: {this.state.date.toLocaleTimeString('en-US', {hour12: true})}</h2>
                <hr />
            </div>
        )
    }
}

export default TimerClass
